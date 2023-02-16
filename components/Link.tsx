import NextLink, { LinkProps } from 'next/link';

export const Link = ({
  children,
  ...rest
}: LinkProps & { className?: string; children: React.ReactNode }) => {
  return (
    <NextLink {...rest} className="underline">
      {children}
    </NextLink>
  );
};
