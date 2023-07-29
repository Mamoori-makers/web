import { Article } from '@/components/Article';
import { getPostMarkdown } from '@/lib/notion';

export default async function HandbookPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postMarkdown = await getPostMarkdown(slug);

  return (
    <div>
      <Article slug={slug} postMarkdown={postMarkdown} />
    </div>
  );
}
