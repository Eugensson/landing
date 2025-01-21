import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Eugensson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.variable, "antialiased bg-[#eaeefe]")}>
        {children}
      </body>
    </html>
  );
}
