import { Link } from '@/components/Link';
import React from 'react';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';

const Subheader = () => {
  return (
    <Container>
      <div className="flex space-x-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </Container>
  );
};

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Header />
      <div className="flex-1">
        <Subheader />
        <Container>{props.children}</Container>
      </div>
      <Footer />
    </div>
  );
};
