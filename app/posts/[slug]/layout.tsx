import { Layout } from '@/components/Layout';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ReactNode } from 'react';

export default function PostPageLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <ScrollProgressBar />
      {children}
    </Layout>
  );
}
