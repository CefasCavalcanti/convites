import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convite",
  description: "Você é nosso convidado especial",
  openGraph: {
    images: 'https://lh7-us.googleusercontent.com/y_VYnClTJdklQX94tPYIZXQwC_xLp-xcPnXLhwK7sRnXAKs2PfKFychragQUg7EyFAvANxWxDLYkD8nDu1KqbMySOjW5GSr11FIgZsNqgctXAkOerZ7TuQL9cYMwCre2IkDd8co8p9olU0dZ',
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
