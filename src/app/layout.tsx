import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convite",
  description: "Você é nosso convidado especial",
  openGraph: {
    images: 'https://lh7-us.googleusercontent.com/XGrQgsxIwemuz_zLpdkkvGWkEsJNhZNYjF6iUZeyun6McqTSJizCvFE6HlJKBbmDByA9j6krV6Ddz7i6rgHPOZDMvaUTQ5AXG8GcJaq5t_mIYBShGodoMoKhZ3P35LStBLFBLU6mpFEmcLm0d56o3cg',
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
