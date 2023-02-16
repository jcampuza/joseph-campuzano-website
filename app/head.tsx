import { SharedHeadTags } from '../components/SharedHead';
import { defaultMetadata } from '../config/meta';

export default function Head() {
  return (
    <>
      <SharedHeadTags />
      <title>{defaultMetadata.title}</title>

      {/* Open Graph */}
      {/* <meta property="og:url" content={`https://josephcampuzano.com${router.asPath}`} key="ogurl" /> */}
      <meta property="og:image" content={defaultMetadata.image} key="ogimage" />
      <meta property="og:title" content={defaultMetadata.title} key="ogtitle" />
      <meta property="og:description" content={defaultMetadata.description} key="ogdesc" />
      <meta name="description" content={defaultMetadata.description} />
    </>
  );
}
