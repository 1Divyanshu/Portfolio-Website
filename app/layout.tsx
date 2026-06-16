import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
    default: "Divyanshu Bhatt — Full-Stack Web Developer, IIT Palakkad",
    template: "%s | Divyanshu Bhatt",
  },
  description:
    "Portfolio of Divyanshu Bhatt, a full-stack web developer and IIT Palakkad student building reliable, real-world web applications through discipline and continuous improvement.",
  keywords: [
    "Divyanshu Bhatt",
    "Full Stack Developer",
    "IIT Palakkad",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Divyanshu Bhatt" }],
  creator: "Divyanshu Bhatt",
  openGraph: {
    type: "website",
    // url: siteUrl,
    title: "Divyanshu Bhatt — Full-Stack Web Developer",
    description:
      "Full-stack web developer and IIT Palakkad student building reliable web applications through discipline and continuous growth.",
    siteName: "Divyanshu Bhatt Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Bhatt — Full-Stack Web Developer",
    description:
      "Full-stack web developer and IIT Palakkad student building reliable web applications through discipline and continuous growth.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
