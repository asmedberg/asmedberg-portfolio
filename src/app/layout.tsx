import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import ThemeToggler from "@/components/ThemeToggler";
import Background from "@/components/layout/Background";
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
        className={`bg-light text-dark dark:bg-dark dark:text-light ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <Background>
            <>
              <ThemeToggler />
              {children}
            </>
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
