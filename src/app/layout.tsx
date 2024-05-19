import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convite",
  description: "Você é nosso convidado especial",
  openGraph: {
    images: 'https://lh5.googleusercontent.com/5VstrF4xJ8MfVz6_cF-c8H0YGL0wsERwWrCEuUd3Rve2uvq0D1qD15NquWiBGksV11sWD-DPAslKDuCcbmsnSzUd2TTi-wwIPLj8ASBACPz1Y_BnXI5x6YYacdt8RlsDeYNd0enUQbpJpol42Vn3N04',
  },
  keywords: ["Convites"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
