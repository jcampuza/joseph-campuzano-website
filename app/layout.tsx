import { defaultMetadata } from '@/config/meta';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <body className="min-h-screen bg-white dark:bg-slate-900 dark:text-neutral-100 transition-colors duration-200 ease-out">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
