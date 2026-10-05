import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../../public/fonts/geist-latin.woff2", weight: "100 900", style: "normal" },
    { path: "../../public/fonts/geist-latin-ext.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    { path: "../../public/fonts/geist-mono-latin.woff2", weight: "100 900", style: "normal" },
    { path: "../../public/fonts/geist-mono-latin-ext.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyCommand — Industrial Joystick & HMI Control Solutions",
  description:
    "Precision industrial joystick controllers, Hall effect joysticks, CAN bus controllers, and rugged HMI panels. OEM/ODM manufacturer for crane, marine, mining, and UAV control systems.",
  keywords: [
    "industrial joystick",
    "hall effect joystick",
    "CAN bus joystick controller",
    "rugged joystick",
    "HMI control panel",
    "joystick manufacturer",
    "OEM joystick supplier",
  ],
  openGraph: {
    title: "SkyCommand — Industrial Joystick & HMI Control Solutions",
    description:
      "Precision industrial joystick controllers for cranes, marine, mining, and UAV systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
