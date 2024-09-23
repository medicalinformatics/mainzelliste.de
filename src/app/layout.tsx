"use client";

import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myLocation, setMyLocation] = useState<Location | null>(null);

  useEffect( () => {
    setMyLocation(window.location);
    if(myLocation != null && myLocation.pathname != "/error" && myLocation.pathname != "/") {
      myLocation.pathname = "/error";
    }
  }, [myLocation]);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
