import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLDR This | AI-Powered Text Summarization Tool",
  description:
    "Transform long texts into concise summaries with our AI-powered tool. Choose from multiple summarization modes including concise, detailed, fluent, creative, and bullet points.",
};

/**
 * Renders the root layout component for a React application.
 * This component sets up the basic HTML structure and applies global styles.
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} A JSX element representing the root HTML structure of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
