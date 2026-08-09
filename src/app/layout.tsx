import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Commerce AI",
  description: "Build, source, launch and scale commerce brands with AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
