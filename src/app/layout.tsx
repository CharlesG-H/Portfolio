import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charles Chua — Product Manager",
  description:
    "Product portfolio of Charles Chua — PM at Bubblegum and MoneySmart, focused on growth, customer lifecycle, and platform product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#fafafa]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
