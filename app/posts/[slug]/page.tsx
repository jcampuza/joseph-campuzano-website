import { PostDetails } from '@/components/PostDetails';
import { PostTags } from '@/components/PostTags';
import { defaultMetadata } from '@/config/meta';
import { getPost, getPosts } from '@/lib/posts';
import { Metadata } from 'next';

type PostDetailPageParams = { slug: string };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: PostDetailPageParams;
}): Promise<Metadata> {
  const post = await getPost(slug);

  return {
    title: `${post.title} | ${defaultMetadata.title}`,

    description: post.preview,

    openGraph: {
      title: `${post.title} | ${defaultMetadata.title}`,
      description: post.preview,
    },

    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  };
}

export default async function PostDetailPage({
  params: { slug },
}: {
  params: PostDetailPageParams;
}) {
  const post = await getPost(slug);

  return (
    <article>
      <header>
        <h1 className="font-mono text-2xl">{post.title}</h1>

        <PostDetails
          className="mb-2"
          timeToReadMins={post.timeToReadMins}
          timestamp={post.timestamp}
        />

        <PostTags tags={post.tags} />
      </header>
      <section
        className="prose dark:prose-invert dark:prose-headings:text-gray-100 dark:text-gray-200 my-8"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></section>
    </article>
  );
}
