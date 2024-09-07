import Link from 'next/link';
import { cn } from '../lib/cn';
import { Container } from './Container';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 bg-gray-950/60 backdrop-filter backdrop-blur border-b border-b-violet-700/80',
        props.className,
      )}
    >
      <Container className="flex justify-between">
        <h1>
          <Link href="/" className="text-md font-mono">
            Joseph Campuzano
          </Link>
        </h1>
      </Container>
    </header>
  );
};
