import { Client } from '@notionhq/client';

import { Post } from './types';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.DATABASE_ID as string;

export const getAllPublishedPosts = async (): Promise<Post[] | undefined> => {
  try {
    const posts = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const allPosts = posts.results;
    return allPosts.map(getPostMetaData);
  } catch (error) {
    console.error(error);
  }
};

const formatDate = (dateString: string) => {
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPostMetaData = (post: any) => {
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
