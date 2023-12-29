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
  contact_info
}: {
  children: React.ReactNode
  contact_info: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-auto min-h-screen max-h">
          <Header />
          <div className="bg-zinc-300">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
