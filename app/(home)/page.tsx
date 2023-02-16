import { PostSummary } from '@/components/PostSummary';
import { getPosts } from '@/lib/posts';

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostSummary
            key={post.slug}
            title={post.title}
            timestamp={post.timestamp}
            preview={post.preview}
            href={`/posts/${post.slug}`}
            tags={post.tags}
            timeToReadMins={post.timeToReadMins}
          />
        </li>
      ))}
    </ul>
  );
}
