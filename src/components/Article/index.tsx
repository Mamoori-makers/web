import { CopyLinkButton } from '@/components/CopyLinkButton';
import { PostMarkdown } from '@/libs/notion/types';

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
    <article>
      <ArticleHeader metadata={metadata} />
      <ArticleMain markdown={markdownString} />
      <div className="flex justify-center px-5">
        <CopyLinkButton />
      </div>
    </article>
  );
};
