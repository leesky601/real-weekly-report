import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "real-weekly-report",
  description:
    "Automatically generate weekly work reports based on your Google Calendar events.",
  verification: {
    google: "4wyb9BlZX6TNK5bu1wI-ecOEc2PLgyOI-wpl4aqBVyk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
