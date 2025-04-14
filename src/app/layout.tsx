import type { Metadata } from "next";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
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
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
