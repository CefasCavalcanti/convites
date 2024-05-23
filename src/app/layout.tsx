import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convite",
  description: "Você é nosso convidado especial",
  openGraph: {
    images: 'https://lh7-us.googleusercontent.com/NHApaQZJNtHf-BVaBBrW36-_UJJx9Z1J164ajLBNjUOOe9aKLu8yC2QI80Sr4c29BmKktYapMu7-FiWw2FOAnDi27N921z9ndXKg6-EIlsM0AEUUHDEp8KtmraB5q0IvH_26OLyLALFQV0Jq',
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
