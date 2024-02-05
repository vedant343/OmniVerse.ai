import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LandingPage from "./(landing)/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniVerse",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LandingPage />
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
    </>
  );
}
