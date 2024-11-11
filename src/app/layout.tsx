import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { nunito, nunitoSans } from "./fonts/fonts";
import { createClient } from "@/prismicio";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "prismic fallback",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
      <Header/>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
