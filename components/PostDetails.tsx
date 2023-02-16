import { useMemo } from 'react';
import { cn } from '../lib/cn';
import { formatDateLong } from '../lib/date';

interface PostDetailsProps {
  timestamp: number;
  timeToReadMins: number;
  className?: string;
}

export const PostDetails = (props: PostDetailsProps) => {
  const dateFormatted = useMemo(() => formatDateLong(props.timestamp), [props.timestamp]);

  return (
    <aside className={cn(props.className)}>
      <time className="block text-xs italic text-gray-700 dark:text-gray-200">
        {dateFormatted}{' '}
      </time>
      <small className="block italic text-gray-600 dark:text-gray-100">
        Reading Time: {props.timeToReadMins} min
      </small>
    </aside>
  );
};
