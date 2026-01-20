import type { Metadata } from "next";
import { instrumentSans, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "doc-it - Beautiful Technical Documentation, Simplified",
  description:
    "Create, manage, and share documentation with the clean, professional aesthetic developers love. No design skills required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
