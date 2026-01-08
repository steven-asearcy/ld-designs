import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#5C4033]/50 bg-[#1F1610]">
      {/* Texture overlay */}
      <div className="relative">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KPGZpbHRlciBpZD0ibm9pc2UiPgogIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Lisa Dinkins Designs"
                width={140}
                height={47}
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <Link
                href="/gallery"
                className="text-sm uppercase tracking-widest text-[#8B7B6B] hover:text-[#C9A227] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-sm uppercase tracking-widest text-[#8B7B6B] hover:text-[#C9A227] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-widest text-[#8B7B6B] hover:text-[#C9A227] transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#4A3728] text-[#8B7B6B] hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="mailto:hello@lisadinkinsdesigns.com"
                className="p-2 rounded-full border border-[#4A3728] text-[#8B7B6B] hover:border-[#2A7B7B] hover:text-[#2A7B7B] transition-all"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#4A3728] to-transparent" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-[#5C4A3A] tracking-wider">
              © {new Date().getFullYear()} Lisa Dinkins Designs. All rights reserved.
            </p>
            <p className="text-xs text-[#4A3728] mt-2 italic">
              Handcrafted with love in Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
