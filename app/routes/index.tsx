import { HeadersFunction, useLoaderData } from 'remix';
import { Layout } from '~/components/Layout';
import { PostSummary } from '~/components/PostSummary';
import { getPosts } from '~/lib/posts';
import { InferRemixLoaderType, LoaderFunctionArgs } from '~/lib/types';

export const loader = async (ctx: LoaderFunctionArgs) => {
  const posts = await getPosts();

  return posts;
};

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=300',
  };
};

export default function Index() {
  const posts = useLoaderData<InferRemixLoaderType<typeof loader>>();

  return (
    <Layout>
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
    </Layout>
  );
}
