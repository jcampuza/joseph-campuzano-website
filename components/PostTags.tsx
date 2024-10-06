interface PostTagsProps {
  tags: string[];
}

export const PostTags = (props: PostTagsProps) => {
  return props.tags.length ? (
    <ul className="flex space-x-2">
      {props.tags.map((tag) => (
        <li key={tag} className="px-3 py-2 bg-neutral-800 rounded-md text-xs">
          {tag}
        </li>
      ))}
    </ul>
  ) : null;
};
