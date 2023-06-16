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
        'bg-gradient-to-bl from-pink-900 to-indigo-900 dark:via-neutral-900 text-white shadow-md',
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
