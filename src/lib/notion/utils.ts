import { Post } from './types';

export const formatDate = (dateString: string) => {
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPostMetadata = (post: any): Post => {
  return {
    id: post.id,
    title: post.properties.Title.title[0].plain_text,
    summary: post.properties.Summary.rich_text[0].plain_text,
    thumbnailImg: post.cover?.external?.url ?? post.cover.file.url,
    slug: post.properties.slug.rich_text[0].plain_text,
    tags: post.properties.Tags.multi_select,
    date: formatDate(post.properties.Date.date.start),
  };
};
