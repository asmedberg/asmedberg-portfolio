import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
          `bg-light dark:bg-dark bg-[url('/images/contour-map-light.svg')] dark:bg-[url('/images/contour-map.svg')] bg-fixed bg-position-[center_top]`,
          `text-dark dark:text-light ${geistSans.variable} ${geistMono.variable} md:text-lg antialiased`
        ].join(" ")}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
