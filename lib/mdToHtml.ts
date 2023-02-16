import { remark } from 'remark';
import html from 'remark-html';

export const mdToHtml = async (content: string) => {
  const result = await remark().use(html).process(content);
  return result;
};
