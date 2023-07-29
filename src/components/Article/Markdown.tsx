import ReactMarkdown from 'react-markdown';
import slug from 'remark-slug';

export const Markdown = ({ markdownString }: { markdownString: string }) => {
  return (
    <ReactMarkdown className="markdown" remarkPlugins={[slug]}>
      {markdownString}
    </ReactMarkdown>
  );
};
