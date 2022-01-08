import { Link as RemixLink, LinkProps } from 'remix';
import { FC } from 'react';

export const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <RemixLink {...rest} className="underline">
      {children}
    </RemixLink>
  );
};
