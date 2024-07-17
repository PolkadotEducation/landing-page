import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Polkadot Education",
  description: "Discover the Possibilities of Blockchain!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Polkadot Education',
    description: 'Discover the Possibilities of Blockchain!',
    url: 'https://polkadot.education',
    siteName: 'Polkadot Education',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex w-full bg-[#F3F5FB] scroll-smooth justify-center overflow-x-hidden">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
