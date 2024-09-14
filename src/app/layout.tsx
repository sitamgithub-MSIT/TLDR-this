import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLDR This | AI-Powered Text Summarization Tool",
  description:
    "Transform long texts into concise summaries with our AI-powered tool. Choose from multiple summarization modes including concise, detailed, fluent, creative, and bullet points.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <script src="./node_modules/preline/dist/preline.js"></script> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
