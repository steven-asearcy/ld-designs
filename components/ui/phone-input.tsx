"use client";

import React, { forwardRef } from "react";
import PhoneNumberInput from "react-phone-number-input/input";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  className?: string;
  id?: string;
  placeholder?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, onChange, ...props }, ref) => {
    return (
      <PhoneNumberInput
        international={false}
        defaultCountry="US"
        inputComponent={InputElement}
        onChange={(val) => onChange(val ?? "")}
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

const InputElement = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      type="tel"
      ref={ref}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
});

InputElement.displayName = "InputElement";

export { PhoneInput };
