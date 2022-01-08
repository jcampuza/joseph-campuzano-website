import { LoaderFunction, Outlet, redirect, useLoaderData } from 'remix';
import { Layout } from '~/components/Layout';
import { PostDetails } from '~/components/PostDetails';
import { PostTags } from '~/components/PostTags';
import { ScrollProgressBar } from '~/components/ScrollProgressBar';
import { getPost, IPost } from '~/lib/posts';

export const loader: LoaderFunction = async ({ params }) => {
  if (!params || !params.slug) {
    redirect('/404');
  }

  const post = await getPost(params.slug as string);

  return post;
};

export default function PostLayout() {
  const post = useLoaderData<IPost>();
  return (
    <Layout>
      <ScrollProgressBar />

      <article>
        <header className="">
          <h1 className="font-mono text-2xl">{post.title}</h1>

          <PostDetails
            className="mb-2"
            timeToReadMins={post.timeToReadMins}
            timestamp={post.timestamp}
          />

          <PostTags tags={post.tags} />
        </header>
        <section className="prose my-8" dangerouslySetInnerHTML={{ __html: post.html }}></section>
      </article>
    </Layout>
  );
}
