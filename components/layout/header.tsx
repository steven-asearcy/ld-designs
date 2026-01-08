"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#5C4033]/50 bg-[#2A1F17]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Lisa Dinkins Designs"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-[#D4C4B0] transition-colors hover:text-[#C9A227] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#D4C4B0] hover:text-[#C9A227] hover:bg-[#3D2B1F] md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-[#5C4033] bg-[#2A1F17] sm:max-w-sm"
          >
            <div className="flex flex-col gap-6 pt-12">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Lisa Dinkins Designs"
                  width={160}
                  height={53}
                  className="h-14 w-auto"
                />
              </div>
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xl uppercase tracking-widest text-center text-[#D4C4B0] transition-colors hover:text-[#C9A227] font-medium"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              
              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#5C4033]" />
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#2A7B7B]">
                  <polygon
                    points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
                    fill="currentColor"
                  />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#5C4033]" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
