import ReactMarkdown from 'react-markdown';
import slug from 'remark-slug';

export const Markdown = ({ markdownString }: { markdownString: string }) => {
  return <ReactMarkdown remarkPlugins={[slug]}>{markdownString}</ReactMarkdown>;
};
