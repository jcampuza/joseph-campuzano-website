interface PostTagsProps {
  tags: string[];
}

export const PostTags = (props: PostTagsProps) => {
  return props.tags.length ? (
    <ul className="flex space-x-2">
      {props.tags.map((tag) => (
        <li key={tag} className="px-2 py-1 bg-violet-900 rounded-sm text-xs">
          {tag}
        </li>
      ))}
    </ul>
  ) : null;
};
