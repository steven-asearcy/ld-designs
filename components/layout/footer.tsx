import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { LogoMark } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-stone-800/50 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-6 w-10 text-stone-100" />
            <span className="font-serif text-xl font-medium text-stone-100">
              LD Designs
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-800 hover:text-amber-400"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:hello@lisadinkinsdesigns.com"
              className="rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-800 hover:text-amber-400"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-stone-800/50 pt-8 text-center">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Lisa Dinkins Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

