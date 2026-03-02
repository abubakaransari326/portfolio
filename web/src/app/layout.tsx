import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Modern, fast portfolio for a software engineer showcasing projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} relative bg-background text-foreground antialiased`}
      >
        <CursorSpotlight />
        <div id="top" className="relative z-10 flex min-h-screen flex-col">
          <main className="flex-1 bg-transparent">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
