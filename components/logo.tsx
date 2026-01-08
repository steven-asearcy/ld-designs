"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  animated?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", animated = false, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-20 w-20",
  };

  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const Wrapper = animated ? motion.svg : "svg";
  const Path = animated ? motion.path : "path";

  return (
    <Wrapper
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} ${className}`}
      {...(animated && { initial: "hidden", animate: "visible" })}
    >
      {/* Background circle with denim texture feel */}
      <circle
        cx="50"
        cy="50"
        r="46"
        className="fill-stone-900 stroke-amber-500/30"
        strokeWidth="2"
      />

      {/* Stylized "L" with paint brush stroke effect */}
      <Path
        d="M32 28 L32 68 L52 68"
        className="stroke-amber-500"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...(animated && { variants: strokeVariants })}
      />

      {/* Stylized "D" with artistic curve */}
      <Path
        d="M56 28 L56 68 M56 28 C76 28 76 68 56 68"
        className="stroke-stone-100"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...(animated && {
          variants: strokeVariants,
          transition: { delay: 0.3, duration: 1.5 },
        })}
      />

      {/* Paint splatter accent */}
      <circle cx="72" cy="32" r="4" className="fill-amber-500" />
      <circle cx="78" cy="38" r="2" className="fill-amber-400" />
      <circle cx="75" cy="42" r="1.5" className="fill-amber-600" />
    </Wrapper>
  );
}

// Alternative: Just the monogram without circle for inline use
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* L */}
      <path
        d="M4 4 L4 36 L20 36"
        className="stroke-amber-500"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* D */}
      <path
        d="M28 4 L28 36 M28 4 C52 4 52 36 28 36"
        className="stroke-current"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Paint drops */}
      <circle cx="54" cy="8" r="3" className="fill-amber-500" />
      <circle cx="58" cy="14" r="1.5" className="fill-amber-400" />
    </svg>
  );
}

