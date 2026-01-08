import type { Metadata } from "next";
import { Libre_Baskerville, Outfit, Rye } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lisa Dinkins Designs | Hand-Painted Denim Art",
  description:
    "Unique, hand-painted designs on denim jackets. Wearable art with a southwestern soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${outfit.variable} ${rye.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
