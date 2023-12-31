import "./globals.css";
import "./background-animated.css"

import { Inter } from "next/font/google";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import type { Metadata } from "next";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Armstrong",
  description: "Portfolio for Kyle Armstrong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main> 
        <Footer />
      </body>
    </html>
  );
}

function AnimatedBackground() {
  return (
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g className="parallax">
    <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
    <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(128,128,128,0.5)" />
    <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
    <use href="#gentle-wave" xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
  </g>
</svg>
  )
}