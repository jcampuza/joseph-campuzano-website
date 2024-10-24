import { PostDetails } from '@/components/PostDetails';
import { PostTags } from '@/components/PostTags';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { defaultMetadata } from '@/config/meta';
import { getPost, getPosts } from '@/lib/posts';
import { Metadata } from 'next';

type PostDetailPageParams = { slug: string };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<PostDetailPageParams>;
}): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

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

export default async function PostDetailPage(props: { params: Promise<PostDetailPageParams> }) {
  const params = await props.params;

  const { slug } = params;

  const post = await getPost(slug);

  return (
    <>
      <ScrollProgressBar />
      <article>
        <header>
          <h1 className="text-2xl mb-2 font-semibold">{post.title}</h1>

          <PostDetails
            className="mb-2"
            timeToReadMins={post.timeToReadMins}
            timestamp={post.timestamp}
          />

          <PostTags tags={post.tags} />
        </header>

        <section
          className="prose prose-invert prose-headings:font-semibold prose-headings:text-gray-100 text-gray-200 my-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></section>
      </article>
    </>
  );
}
