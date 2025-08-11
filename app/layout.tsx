// file: app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimalist Blog",
  description: "A clean, minimalist blog built with Next.js and Drizzle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8f7f4] text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
