"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-950">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-950 to-stone-950" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxmaWx0ZXIgaWQ9Im5vaXNlIj4KICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <Logo size="lg" animated />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl font-light tracking-tight text-stone-100 sm:text-7xl"
          >
            Lisa Dinkins Designs
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg text-stone-400 sm:text-xl"
          >
            Hand-painted denim art that tells your story
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
          />

          {/* Coming soon message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 text-sm uppercase tracking-widest text-stone-500"
          >
            Full site coming soon
          </motion.p>

          {/* CTA Buttons - placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              variant="outline"
              className="border-stone-700 bg-transparent text-stone-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400"
              asChild
            >
              <Link href="#gallery">View Gallery</Link>
            </Button>
            <Button className="bg-amber-600 text-stone-950 hover:bg-amber-500">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 text-xs text-stone-600"
        >
          © {new Date().getFullYear()} Lisa Dinkins Designs. All rights reserved.
        </motion.div>
      </main>
    </div>
  );
}
