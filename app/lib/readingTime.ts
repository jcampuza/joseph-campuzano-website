import { parse } from 'node-html-parser';

export const readingTimeMins = (html: string, wpm = 250) => {
  const el = parse(html);
  const words = el.innerText.split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);

  return minutes;
};
