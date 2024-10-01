"use client";
import localFont from "next/font/local";
import "./globals.css";

import { useEffect } from 'react';
import { initializeScrollbar } from "@/utils/useHideScrollbar";

const achivo_blackregular = localFont({
  src: "./fonts/archivoblack-regular-webfont.woff2",
  variable: "--font-achivo-regular",
  weight: "100 500",
});

const achivo_black = localFont({
  src: "./fonts/archivoblack-regular-webfont.woff2",
  variable: "--font-archivo-regular",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { useEffect(() => {
  initializeScrollbar();
}, []);

  return (
    <html lang="en">
      <body
        className={`${achivo_black.variable} ${achivo_blackregular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
