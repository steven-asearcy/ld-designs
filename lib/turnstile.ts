const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileVerifyResult {
  success: boolean;
  error?: string;
}

/**
 * Verify a Turnstile token server-side.
 * Use this in any API route to validate that the request came from a real user.
 *
 * @param token - The cf-turnstile-response token from the client
 * @param ip - Optional client IP for additional validation
 * @returns { success: boolean, error?: string }
 */
export async function verifyTurnstileToken(
  token: string | undefined | null,
  ip?: string
): Promise<TurnstileVerifyResult> {
  if (!token) {
    return { success: false, error: "Verification required. Please try again." };
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const body: Record<string, string> = {
      secret: secretKey,
      response: token,
    };

    if (ip) {
      body.remoteip = ip;
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body),
    });

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        error: "Verification failed. Please refresh and try again.",
      };
    }

    return { success: true };
  } catch {
    console.error("Turnstile verification request failed");
    return { success: false, error: "Verification service unavailable." };
  }
}
