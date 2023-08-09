import "@/styles/globals.scss";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const dmFontFamily = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cherry Swap",
  description:
    "Collect Cherry and stake your Cryptocurrency with Cherry Swap, the best decentralized exchange on OKexChain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmFontFamily.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
