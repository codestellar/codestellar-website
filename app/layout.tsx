import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
// import { TextHoverEffectDemo } from "@/components/layout/FootterBottom";
import Footer from "@/components/layout/Footer"
import { CursorClickEffect } from "@/components/ui/cursor-click-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Madaan - Codestellar",
  description: "Design & Developed by Itsayu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (storedTheme === 'dark' || !storedTheme) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorClickEffect />
        <Header />
        {children}
        <Footer />
        {/* <TextHoverEffectDemo /> */}
      </body>
    </html>
  );
}