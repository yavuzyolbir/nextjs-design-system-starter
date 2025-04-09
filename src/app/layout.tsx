import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

import "@/assets/styles/main.scss";

export const metadata: Metadata = {
  title: "Next.js Design System Starter",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
