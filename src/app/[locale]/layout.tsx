import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function LocaleLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="flex w-full bg-[#F3F5FB] scroll-smooth justify-center overflow-x-hidden">
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
