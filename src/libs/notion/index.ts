import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

import { Post } from './types';
import { getPostMetadata } from './utils';

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
    return allPosts.map(getPostMetadata);
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  return response.results[0];
};

export const getAllBlocksInPost = async (slug: string) => {
  try {
    const post = await getPost(slug);
    const postId = post.id;
    const blocks = await notion.blocks.children.list({ block_id: postId });
    return blocks.results;
  } catch (error) {
    console.error(error);
  }
};

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPostMarkdown = async (slug: string) => {
  const post = await getPost(slug);
  const metadata = getPostMetadata(post);
  const postId = post.id;
  const mdBlocks = await n2m.pageToMarkdown(postId);
  const markdown = n2m.toMarkdownString(mdBlocks);
  const headings = await n2m.pageToMarkdown(postId, 2);

  return { metadata, markdown, headings };
};
