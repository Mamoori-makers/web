import { PostMarkdown } from '@/lib/notion/types';

import { ArticleHeader } from './ArticleHeader';
import { ArticleMain } from './ArticleMain';

type ArticleProps = {
  slug?: string;
  postMarkdown: PostMarkdown;
};

export const Article = ({ postMarkdown }: ArticleProps) => {
  const {
    metadata,
    markdown: { parent: markdownString },
  } = postMarkdown;

  return (
    <article className="mt-5">
      <ArticleHeader metadata={metadata} />
      <ArticleMain markdown={markdownString} />
    </article>
  );
};
