import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import P5Canvas from "@/components/P5Canvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Adam Smedberg - Web Developer",
  description: "Portfolio of Adam Smedberg, a web developer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          `bg-light dark:bg-dark`,
          `text-dark dark:text-light ${geistSans.variable} ${geistMono.variable} md:text-lg antialiased`
        ].join(" ")}
      >
        <ThemeProvider attribute="class">
          <P5Canvas />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
