import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convite",
  description: "Você é nosso convidado especial",
  openGraph: {
    images: 'https://lh7-us.googleusercontent.com/NFJpDrHNQnxETZmWAKwWQKJaySf_y1G1eeZX1H5sO7o9Vz7NBscQ77bLKKdNyZFNmqzLxy60s414LgbFuli7xrkQYlD3wclQhAQi2KfpXsq6OLvXoOcxKQl6geediDs80HWU_VIHNmj-4GYu',
  },
  keywords: ["Convites"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
