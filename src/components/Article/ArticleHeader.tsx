import Image from 'next/image';

import { Tags } from '@/components/Tags';
import { Post } from '@/lib/notion/types';

// TODO: Header styling
export const ArticleHeader = ({ metadata }: { metadata: Post }) => {
  const { title, summary, thumbnailImg, tags, date } = metadata;

  return (
    <header>
      {thumbnailImg && (
        <div className="relative mx-auto h-[200px] rounded-xl">
          <Image src={thumbnailImg} alt={title} fill priority />
        </div>
      )}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{summary}</p>
      <Tags tags={tags} />
      <time>{date}</time>
    </header>
  );
};
