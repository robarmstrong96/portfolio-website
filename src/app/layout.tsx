import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { TopHeader } from "./Header/top_headers"; 
import { Sections } from "./Sections/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Armstrong",
  description: "Portfolio for Kyle Armstrong",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-auto min-h-screen">
          <TopHeader />
          <nav></nav>
            {children}
          <Sections />
        </main>
      </body>
    </html>
  );
}
