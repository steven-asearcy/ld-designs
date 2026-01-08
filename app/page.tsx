"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, ChevronDown } from "lucide-react";

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

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="Lisa Dinkins Designs"
              width={400}
              height={400}
              className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#5C4033] text-[#8B7B6B] hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:hello@lisadinkinsdesigns.com"
              className="p-3 rounded-full border border-[#5C4033] text-[#8B7B6B] hover:border-[#2A7B7B] hover:text-[#2A7B7B] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[#5C4033]"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-2 text-xs text-[#4A3728] tracking-wider"
        >
          © {new Date().getFullYear()} Lisa Dinkins Designs
        </motion.div>
      </main>
    </div>
  );
}
