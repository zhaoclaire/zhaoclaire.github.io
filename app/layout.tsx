import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Providers } from "./providers";
import { fonts } from "./fonts";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Claire's Blog",
  description: "Writings on machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.quick_sand.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
