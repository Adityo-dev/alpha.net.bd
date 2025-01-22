import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
// components
import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";
import Footer from "@/components/shared/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Web Hosting, WordPress Hosting, Reseller Hosting, VPS, Dedicated Server, Domain Registration in Bangladesh - Dinisoft",
  description: "Dinisoft is the best web hosting company in Bangladesh. We provide web hosting, WordPress hosting, reseller hosting, VPS, dedicated server, domain registration, and web design services.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <MainNavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
