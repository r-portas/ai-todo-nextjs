import type { Metadata } from "next";
import { fontClassNames } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Todo Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClassNames} antialiased dark`}>
      <body>{children}</body>
    </html>
  );
}
