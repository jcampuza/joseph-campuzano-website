import { renderToString } from 'react-dom/server';
import { RemixServer, redirect } from 'remix';
import type { EntryContext } from 'remix';

const getHttpsUrl = (url: string) => {
  if (url.startsWith('http://')) {
    const [, ...rest] = url.split('http://');
    return `https://${rest.join('')}`;
  }

  return `https://${url}`;
};

const isFlyHttpForward = (request: Request) => request.headers.get('X-Forwarded-Proto') === 'http';

const handleFlyHttpToHttpsRedirect = (request: Request) => redirect(getHttpsUrl(request.url), 301);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  // Handle HTTPS Redirect in application for now
  if (isFlyHttpForward(request)) {
    return handleFlyHttpToHttpsRedirect(request);
  }

  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
