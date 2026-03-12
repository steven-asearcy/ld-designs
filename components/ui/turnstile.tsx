"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact" | "flexible";
  className?: string;
}

// Track script loading globally so multiple instances don't conflict
let scriptLoadPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptLoadPromise = null;
      reject(new Error("Failed to load Turnstile script"));
    };
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

export function Turnstile({
  onVerify,
  onExpire,
  onError,
  theme = "light",
  size = "flexible",
  className,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [error, setError] = useState(false);

  // Stable callback refs to avoid re-rendering the widget
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        await loadTurnstileScript();
      } catch {
        if (mounted) setError(true);
        return;
      }

      if (!mounted || !containerRef.current || !window.turnstile) return;

      // Clean up any existing widget
      if (widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
        theme,
        size,
        callback: (token: string) => onVerifyRef.current(token),
        "expired-callback": () => onExpireRef.current?.(),
        "error-callback": () => {
          onErrorRef.current?.();
          if (mounted) setError(true);
        },
      });
    }

    init();

    return () => {
      mounted = false;
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [theme, size]);

  if (error) {
    return null;
  }

  return <div ref={containerRef} className={className} />;
}

/** Reset a Turnstile widget — call after form submission to get a fresh token */
export function useTurnstileReset() {
  const tokenRef = useRef<string>("");

  const setToken = useCallback((token: string) => {
    tokenRef.current = token;
  }, []);

  const clearToken = useCallback(() => {
    tokenRef.current = "";
  }, []);

  const getToken = useCallback(() => tokenRef.current, []);

  return { setToken, clearToken, getToken };
}

// Type declarations for the Turnstile global
declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}
