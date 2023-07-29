import Image from 'next/image';

import { ProfileImage } from '@/components/ProfileImage';
import { Tags } from '@/components/Tags';
import { Post } from '@/lib/notion/types';

export const ArticleHeader = ({ metadata }: { metadata: Post }) => {
  const { title, summary, thumbnailImg, tags, date } = metadata;

  return (
    <header>
      <div className="flex items-center p-2">
        <ProfileImage imageSrc="/assets/mamoori-favicon.jpg" alt="mamoori" />
        <span className="ml-2 text-sm font-semibold">Mamoori Makers</span>
      </div>
      {thumbnailImg && (
        <div className="relative mx-auto h-[300px] rounded-xl">
          <Image src={thumbnailImg} alt={title} fill priority style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <h2 className="w-[250px] text-xl font-bold sm:w-full sm:text-2xl">{title}</h2>
        <p className="text-brown-100">{summary}</p>
        <Tags tags={tags} />
        <time className="text-sm text-brown-100">{date}</time>
      </div>
    </header>
  );
};
