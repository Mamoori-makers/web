import { Markdown } from './Markdown';

type ArticleMainProps = {
  markdown: string;
  headings?: unknown;
};

export const ArticleMain = ({ markdown }: ArticleMainProps) => {
  return (
    <div>
      <Markdown markdownString={markdown} />
    </div>
  );
};
