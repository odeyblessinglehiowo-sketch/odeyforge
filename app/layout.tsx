import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OdeyForge | Technology Company",
  description:
    "OdeyForge builds scalable software, business platforms, and technology solutions for organizations that demand reliability, performance, and growth.",
  keywords: [
    "technology company",
    "software development",
    "web applications",
    "enterprise software",
    "custom software",
    "odeyforge",
    "website",
    "coding",
    "web design",
    "web development",
     "Odey",
    "Forge",
    "OdeyForge",
  ],
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