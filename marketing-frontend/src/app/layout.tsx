import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASARA - Marketing Planning",
  description: "Startup Business Planning & Guidance Platform - Marketing Module",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
