import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reuseOnline ⚡ - Easily check your users online status",
  description: "A react hook to easily check users online status of your users",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "reuseOnline Hook ⚡",
  keywords: [
    "react custom hook",
    "online activity hook",
    "react useonline",
    "reuseOnline",
    "react hook to check online status",
    "online status",
    "users online status",
  ],
  twitter: {
    card: "summary_large_image",
    title: "reuseOnline ⚡ - Easily check your users online status ",
    description:
      "A react hook to easily check users online status of your users",
    creator: "@elorm_elom",
    images: ["https://reuseonline.vercel.app/twitter-image.png"],
  },

  openGraph: {
    images: "https://reuseonline.vercel.app/opengraph-image.png",
    title: "reuseOnline ⚡ - Easily check your users online status",
    description:
      "A react hook to easily check users online status of your users",
  },
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
