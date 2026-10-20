import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Openroad Software Solution — Web, SaaS & Mobile Apps", template: "%s | Openroad Software Solution" },
  description: "Openroad Software Solution builds exquisite web applications, portfolio websites, SaaS products and mobile applications for ambitious brands.",
  keywords: ["web applications", "portfolio websites", "SaaS products", "mobile applications", "Openroad Software Solution"],
  openGraph: { title: "Openroad Software Solution", description: "Web applications, portfolios, SaaS products & mobile apps — built for the open road.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sora.variable} ${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (no flash).
            White / light is the default; only a saved "dark" choice overrides it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("openroad-theme");document.documentElement.dataset.theme=(t==="dark"?"dark":"light");}catch(e){document.documentElement.dataset.theme="light";}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-base">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
