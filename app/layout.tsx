import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });


export const metadata: Metadata = {
  title: "Menteor - Empowering Skill-Building Through Expert Mentorship",
  description: "Unlock your potential with Menteor - a transformative platform connecting mentees with industry experts for personalized skill-building mentorship. Join our community to forge successful careers through expert guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          syne.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
