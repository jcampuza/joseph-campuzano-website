export interface Meta {
  description: string;
  title: string;
  image: string;
}

export const defaultMetadata: Meta = {
  description: "Joseph Campuzano's personal blog",
  title: 'Joseph Campuzano',
  image: '/favicon-32x32.png',
};

export const getDefaultRouteMetadata = ({
  titlePrefix,
  description,
}: {
  titlePrefix?: string;
  description?: string;
}) => {
  return {
    title: titlePrefix ? `${titlePrefix} | ${defaultMetadata.title}` : defaultMetadata.title,
    description: description ?? defaultMetadata.description,
  };
};
