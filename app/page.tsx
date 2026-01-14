"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#C4A87C]">
      {/* Wood grain texture background - positioned to show lighter area at top */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/landing-bg.jpg')", backgroundPosition: "center 70%" }}
      />
      
      {/* Slight overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Subtle vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(40,25,15,0.35)_100%)]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl -mt-8"
        >
          {/* Logo - no backdrop needed, it pops on wood */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 flex justify-center relative py-4"
          >
            <Image
              src="/logo.png"
              alt="Lisa Dinkins Designs"
              width={400}
              height={400}
              className="relative w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              priority
            />
          </motion.div>

          {/* Frosted glass content panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative px-8 py-8 sm:px-12 sm:py-10 rounded-2xl backdrop-blur-md bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/50"
          >
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8B4726]" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2A7B7B]">
                <polygon
                  points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
                  fill="currentColor"
                />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8B4726]" />
            </div>

            {/* Tagline */}
            <p className="font-serif text-lg sm:text-xl text-[#3D2B1F] tracking-wide">
              Hand-painted denim art with a{" "}
              <span className="text-[#2A7B7B] font-semibold">southwestern soul</span>
            </p>

            {/* Description */}
            <p className="mt-5 text-[#5C4A3A] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Each piece tells a story. From desert sunsets to sacred symbols, 
              every brushstroke is infused with the spirit of the Southwest.
            </p>

            {/* Coming soon notice */}
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#8B7B6B]">
              Full site coming soon
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                variant="outline"
                className="border-2 border-[#8B4726] bg-white/50 text-[#8B4726] hover:bg-[#8B4726] hover:text-[#F5EDE0] transition-all duration-300 font-semibold tracking-wider uppercase text-sm px-8 py-5"
                asChild
              >
                <Link href="#gallery">View Gallery</Link>
              </Button>
              <Button
                className="bg-[#2A7B7B] text-[#F5EDE0] hover:bg-[#1E5F5F] transition-all duration-300 font-semibold tracking-wider uppercase text-sm px-8 py-5 border-2 border-[#2A7B7B] hover:border-[#1E5F5F] shadow-lg"
                asChild
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 text-xs text-white/80 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          © {new Date().getFullYear()} Lisa Dinkins Designs
        </motion.div>
      </main>
    </div>
  );
}
