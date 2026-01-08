"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2A1F17]">
      {/* Aged paper/leather texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F] via-[#2A1F17] to-[#1F1610]" />
      
      {/* Noise texture overlay for aged effect */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KPGZpbHRlciBpZD0ibm9pc2UiPgogIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,15,10,0.6)_100%)]" />

      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A227]">
          <path
            d="M0 50 Q25 50 25 25 Q25 0 50 0 M0 50 Q0 25 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 opacity-20 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A227]">
          <path
            d="M0 50 Q25 50 25 25 Q25 0 50 0 M0 50 Q0 25 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24 opacity-20 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A227]">
          <path
            d="M0 50 Q25 50 25 25 Q25 0 50 0 M0 50 Q0 25 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A227]">
          <path
            d="M0 50 Q25 50 25 25 Q25 0 50 0 M0 50 Q0 25 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl -mt-8"
        >
          {/* Logo with spotlight backdrop */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 flex justify-center relative py-4"
          >
            {/* Spotlight effect behind logo */}
            <div className="absolute -inset-12 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(245,237,224,0.25)_0%,_rgba(201,162,39,0.1)_30%,_transparent_70%)]" />
            <Image
              src="/logo.png"
              alt="Lisa Dinkins Designs"
              width={400}
              height={400}
              className="relative w-64 sm:w-80 md:w-96 h-auto brightness-110 contrast-105"
              priority
            />
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2A7B7B]">
              <polygon
                points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
                fill="currentColor"
              />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-lg sm:text-xl text-[#D4C4B0] tracking-wide"
          >
            Hand-painted denim art with a{" "}
            <span className="text-[#2A7B7B] font-semibold">southwestern soul</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-[#8B7B6B] max-w-xl mx-auto leading-relaxed"
          >
            Each piece tells a story. From desert sunsets to sacred symbols, 
            every brushstroke is infused with the spirit of the Southwest.
          </motion.p>

          {/* Coming soon notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-8 text-xs uppercase tracking-[0.25em] text-[#6B5A4A]"
          >
            Full site coming soon
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              variant="outline"
              className="border-2 border-[#C9A227] bg-transparent text-[#C9A227] hover:bg-[#C9A227] hover:text-[#2A1F17] transition-all duration-300 font-semibold tracking-wider uppercase text-sm px-8 py-6"
              asChild
            >
              <Link href="#gallery">View Gallery</Link>
            </Button>
            <Button
              className="bg-[#2A7B7B] text-[#F5EDE0] hover:bg-[#1E5F5F] transition-all duration-300 font-semibold tracking-wider uppercase text-sm px-8 py-6 border-2 border-[#2A7B7B] hover:border-[#1E5F5F]"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>

        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 text-xs text-[#5C4A3A] tracking-wider"
        >
          © {new Date().getFullYear()} Lisa Dinkins Designs
        </motion.div>
      </main>
    </div>
  );
}
