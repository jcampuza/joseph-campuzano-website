import type { LinkDescriptor, MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { defaultMetadata } from '~/config/meta';
import styles from './tailwind.css';

export function links(): LinkDescriptor[] {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: defaultMetadata.title, description: defaultMetadata.description };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></script>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white">
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
