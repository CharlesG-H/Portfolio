import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://charlesc.vercel.app"),
  title: {
    default: "Charles Chua — Product Manager",
    template: "%s — Charles Chua",
  },
  description:
    "Product portfolio of Charles Chua — PM at Bubblegum and MoneySmart, focused on growth, customer lifecycle, and platform product.",
  openGraph: {
    type: "website",
    siteName: "Charles Chua — Product Manager",
    url: "/",
    title: "Charles Chua — Product Manager",
    description:
      "Growth experiments, zero-to-one builds, and internal tooling — case studies with the real numbers and decisions behind them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Chua — Product Manager",
    description:
      "Growth experiments, zero-to-one builds, and internal tooling — case studies with the real numbers and decisions behind them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
