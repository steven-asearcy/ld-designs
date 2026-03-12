"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Turnstile, useTurnstileReset } from "@/components/ui/turnstile";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

const MESSAGE_MAX_LENGTH = 5000;
const REQUEST_TIMEOUT_MS = 15000;

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const { setToken, clearToken, getToken } = useTurnstileReset();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageValue = watch("message", "");
  const messageLength = messageValue?.length ?? 0;

  // Focus the name field when the dialog opens
  useEffect(() => {
    if (open && status === "idle") {
      const timer = setTimeout(() => nameInputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [open, status]);

  // Focus the first invalid field on validation error
  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0] as
      | keyof ContactFormData
      | undefined;
    if (firstErrorField) {
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);

  function handleClose(isOpen: boolean) {
    if (!isOpen) {
      setTimeout(() => {
        setStatus("idle");
        setServerError("");
        clearToken();
        reset();
      }, 200);
    }
    onOpenChange(isOpen);
  }

  async function onSubmit(data: ContactFormData) {
    setServerError("");
    setStatus("idle");

    const turnstileToken = getToken();
    if (!turnstileToken) {
      setServerError("Please complete the verification check.");
      setStatus("error");
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const result = await response.json();

        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please wait a few minutes and try again."
          );
        }

        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setServerError(
          "Request timed out. Please check your connection and try again."
        );
      } else {
        setServerError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      }
      setStatus("error");
    }
  }

  // Shared ref callback to merge react-hook-form's ref with our local ref
  const { ref: nameRegisterRef, ...nameRegisterRest } = register("name");

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="border-[#D4C4B0] bg-[#FAF6F0] shadow-2xl sm:max-w-md"
        showCloseButton={status !== "success"}
      >
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2A7B7B]/10">
              <CheckCircle2 className="h-7 w-7 text-[#2A7B7B]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#3D2B1F]">
                Message Sent
              </h3>
              <p className="mt-2 text-sm text-[#5C4A3A]">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
            </div>
            <Button
              onClick={() => handleClose(false)}
              className="mt-2 bg-[#2A7B7B] text-[#F5EDE0] hover:bg-[#1E5F5F] font-semibold tracking-wider uppercase text-sm px-8 py-5"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              {/* Decorative divider matching landing page */}
              <div className="flex items-center justify-center gap-3 mb-1">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B4726]" />
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#2A7B7B]">
                  <polygon
                    points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
                    fill="currentColor"
                  />
                </svg>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#8B4726]" />
              </div>
              <DialogTitle className="font-serif text-xl text-[#3D2B1F] text-center">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="text-[#5C4A3A] text-center">
                We&apos;d love to hear from you. Send us a message and
                we&apos;ll respond as soon as possible.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 mt-2"
              noValidate
            >
              {/* Honeypot — hidden from real users, bots will fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-[#3D2B1F] font-semibold tracking-wide text-xs uppercase"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="border-[#D4C4B0] bg-white/60 text-[#3D2B1F] placeholder:text-[#8B7B6B] focus-visible:border-[#8B4726] focus-visible:ring-[#8B4726]/20"
                  ref={(el) => {
                    nameRegisterRef(el);
                    nameInputRef.current = el;
                  }}
                  {...nameRegisterRest}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-[#B44D4D]" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[#3D2B1F] font-semibold tracking-wide text-xs uppercase"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="border-[#D4C4B0] bg-white/60 text-[#3D2B1F] placeholder:text-[#8B7B6B] focus-visible:border-[#8B4726] focus-visible:ring-[#8B4726]/20"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-[#B44D4D]" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="message"
                    className="text-[#3D2B1F] font-semibold tracking-wide text-xs uppercase"
                  >
                    Message
                  </Label>
                  <span
                    className={`text-xs tabular-nums ${
                      messageLength > MESSAGE_MAX_LENGTH
                        ? "text-[#B44D4D] font-semibold"
                        : "text-[#8B7B6B]"
                    }`}
                    aria-live="polite"
                  >
                    {messageLength.toLocaleString()}/{MESSAGE_MAX_LENGTH.toLocaleString()}
                  </span>
                </div>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="resize-none border-[#D4C4B0] bg-white/60 text-[#3D2B1F] placeholder:text-[#8B7B6B] focus-visible:border-[#8B4726] focus-visible:ring-[#8B4726]/20"
                  {...register("message")}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-[#B44D4D]" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Turnstile verification */}
              <div className="flex justify-center">
                <Turnstile
                  onVerify={setToken}
                  onExpire={clearToken}
                  theme="light"
                />
              </div>

              {serverError && (
                <p className="text-sm text-[#B44D4D] text-center" role="alert">
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2A7B7B] text-[#F5EDE0] hover:bg-[#1E5F5F] transition-all duration-300 font-semibold tracking-wider uppercase text-sm px-8 py-5 border-2 border-[#2A7B7B] hover:border-[#1E5F5F] shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
