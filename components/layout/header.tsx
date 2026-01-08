"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { LogoMark } from "@/components/logo";
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark className="h-6 w-10 text-stone-100 transition-transform group-hover:scale-105" />
          <span className="font-serif text-xl font-medium text-stone-100">
            LD Designs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-400 transition-colors hover:text-amber-400"
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
              className="text-stone-400 hover:text-stone-100 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-stone-800 bg-stone-950 sm:max-w-sm"
          >
            <div className="flex flex-col gap-6 pt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="text-2xl font-serif text-stone-200 transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
