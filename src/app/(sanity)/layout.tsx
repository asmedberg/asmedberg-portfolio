import type { Metadata } from "next";

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
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
