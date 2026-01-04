import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcology | Future Cities",
  description: "Welcome to Arcology - Building sustainable cities of tomorrow",
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
