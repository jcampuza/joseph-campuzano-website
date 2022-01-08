import { marked } from 'marked';

export const mdToHtml = async (content: string) => {
  const result = marked(content);
  return result;
};
