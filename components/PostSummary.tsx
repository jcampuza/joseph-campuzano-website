import Link from 'next/link';
import { PostDetails } from './PostDetails';
import { PostTags } from './PostTags';

interface PostSummaryProps {
  href: string;
  title: string;
  preview: string;
  timestamp: number;
  tags: string[];
  timeToReadMins: number;
}

export const PostSummary = (props: PostSummaryProps) => {
  return (
    <article className="py-8 border-b border-gray-400 dark:border-neutral-400">
      <header className="mb-2 flex flex-col">
        <h2 className="text-lg font-mono focus:underline hover:underline mb-2">
          <Link href={props.href}>{props.title}</Link>
        </h2>

        <PostDetails timeToReadMins={props.timeToReadMins} timestamp={props.timestamp} />
      </header>

      <p className="text-gray-800 dark:text-gray-200 mb-2">{props.preview}</p>

      <PostTags tags={props.tags} />
    </article>
  );
};
