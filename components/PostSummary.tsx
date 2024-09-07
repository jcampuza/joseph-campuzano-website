import Link from 'next/link';
import { PostDetails } from './PostDetails';
import { PostTags } from './PostTags';
import { cn } from '@/lib/cn';

interface PostSummaryProps {
  className?: string;
  href: string;
  title: string;
  preview: string;
  timestamp: number;
  tags: string[];
  timeToReadMins: number;
}

export const PostSummary = (props: PostSummaryProps) => {
  return (
    <article className={cn('py-8')}>
      <header className="mb-2 flex flex-col">
        <h2 className="text-lg focus:underline hover:underline mb-2 font-semibold">
          <Link prefetch={false} href={props.href}>
            {props.title}
          </Link>
        </h2>

        <PostDetails timeToReadMins={props.timeToReadMins} timestamp={props.timestamp} />
      </header>

      <p className="mb-2">{props.preview}</p>

      <PostTags tags={props.tags} />
    </article>
  );
};
