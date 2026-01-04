import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcology | Future Cities",
  description: "Welcome to Arcology - Building sustainable cities of tomorrow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.69,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
