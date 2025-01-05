import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arogyam",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
  openGraph: {
    title: "Arogyam",
    description:
      "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
    images: [
      {
        url: "/assets/images/metaback.png", // Update this path to your actual image
        width: 1200,
        height: 630,
        alt: "Arogyam Healthcare System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arogyam",
    description:
      "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
    images: ["/assets/images/metaback.png"], // Update this path to your actual image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
