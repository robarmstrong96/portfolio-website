import "./globals.css";

import { Inter } from "next/font/google";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-auto min-h-min">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
