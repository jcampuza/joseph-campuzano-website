import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { mdToHtml } from './mdToHtml';
import { readingTimeMins } from './readingTime';
import { z } from 'zod';

// Runtime schema check so that build fails if something doesn't parse correctly
const PostSchema = z.object({
  html: z.string(),
  timeToReadMins: z.number(),
  slug: z.string(),
  timestamp: z.number(),
  preview: z.string(),
  title: z.string(),
  tags: z.string().array(),
});

export type IPost = z.infer<typeof PostSchema>;

export type IPostSummary = Omit<IPost, 'html'>;

const postSummaryFromPost = (post: IPost): IPostSummary => {
  return {
    preview: post.preview,
    slug: post.slug,
    tags: post.tags,
    timestamp: post.timestamp,
    timeToReadMins: post.timeToReadMins,
    title: post.title,
  };
};

const postsDir = path.join(process.cwd(), '_posts');

const parsePostFromFileContents = async (file: string): Promise<IPost> => {
  const rawContent = await fs.readFile(path.join(postsDir, file), 'utf-8');
  const slug = file.replace(/\.md$/, '');
  const { content, data } = matter(rawContent);
  const title = data.title as string;
  const preview = data.preview as string;
  const date = new Date(data.date);
  const tags = data.tags as string[];
  const result = (await mdToHtml(content)).toString();
  const timeToReadMins = readingTimeMins(result);

  const post = PostSchema.parse({
    html: result,
    timeToReadMins,
    slug,
    timestamp: date.getTime(),
    preview,
    title,
    tags,
  });

  return post;
};

const getPostsFiles = () => {
  return fs.readdir(postsDir);
};

export const getPosts = async (): Promise<IPostSummary[]> => {
  const files = await getPostsFiles();
  const posts = await Promise.all(files.map((file) => parsePostFromFileContents(file)));

  return posts.map((post) => postSummaryFromPost(post)).sort((a, b) => b.timestamp - a.timestamp);
};

export const getPost = (slug: string) => {
  const fileName = `${slug}.md`;
  return parsePostFromFileContents(fileName);
};
