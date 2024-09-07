import { defaultMetadata } from '@/config/meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About | ${defaultMetadata.title}`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      <h2 className="text-2xl mb-4">About Me</h2>
      <main className="space-y-4">
        <p>
          Hi, I&apos;m Joseph <span className="inline-block animate-wiggle">👋</span>
        </p>
        <p>
          I talk code, life, and anything else that may be on my mind. Sometimes I think of things
          that others may be interested in, so I figured I&apos;d start a small blog
        </p>

        <p>
          If you ever want to reach me, you can at{' '}
          <a className="text-violet-400 underline" href="mailto:campuzanojoseph@gmail.com">
            campuzanojoseph@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
