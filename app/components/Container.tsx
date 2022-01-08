import { cn } from '../lib/cn';
import { FCWithClassName } from '../lib/types';

export const Container: FCWithClassName = (props) => {
  return <div className={cn('max-w-4xl mx-auto p-4', props.className)}>{props.children}</div>;
};
