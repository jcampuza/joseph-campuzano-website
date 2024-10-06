import { defaultMetadata } from '@/config/meta';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: defaultMetadata.title,

  metadataBase: new URL('https://josephcampuzano.com'),

  description: defaultMetadata.description,

  keywords: ['Joseph Campuzano', 'Software Developer', 'Travel', 'Personal Blog'],

  twitter: {
    creator: 'CampuzanoJoe',
    card: 'summary',
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    shortcut: '/favicon.ico',
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },

  openGraph: {
    url: 'https://josephcampuzano.com',
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: defaultMetadata.image,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen bg-neutral-950 text-slate-200 transition-colors duration-200 ease-out selection:bg-fuchsia-800">
        <div className="min-h-screen flex flex-col justify-start">
          <div className="flex-1 pt-4 sm:pt-8 pb-16">
            <Header />

            <Container>
              <div className="flex space-x-2">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
              </div>
            </Container>

            <Container>{children}</Container>
          </div>
          <Footer />
        </div>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
