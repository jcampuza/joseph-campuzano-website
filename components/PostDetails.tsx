import { cn } from '../lib/cn';
import { formatDateLong } from '../lib/date';

interface PostDetailsProps {
  timestamp: number;
  timeToReadMins: number;
  className?: string;
}

export const PostDetails = (props: PostDetailsProps) => {
  const dateFormatted = formatDateLong(props.timestamp);

  return (
    <aside className={cn(props.className)}>
      <time className="block text-xs italic">{dateFormatted} </time>
      <small className="block italic ">Reading Time: {props.timeToReadMins} min</small>
    </aside>
  );
};
