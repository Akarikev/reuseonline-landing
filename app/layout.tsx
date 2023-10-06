import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reuseOnline ⚡",
  description: "react hook to check users online activity",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={cn("min-h-screen  antialiased grainy", inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
