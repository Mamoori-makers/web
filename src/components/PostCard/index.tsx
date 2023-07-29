import Image from 'next/image';
import Link from 'next/link';

import { Tags } from '@/components/Tags';

import type { Post } from '@/lib/notion/types';

export const PostCard = ({ data }: { data: Post }) => {
  const { title, summary, thumbnailImg, slug, tags, date } = data;

  return (
    <li className="mx-auto h-[400px] w-[300px] list-none rounded-lg shadow-lg">
      <Link href={`/roadmap/handbook/${slug}`} className="block h-full">
        <div className="relative h-[200px]">
          <Image
            src={thumbnailImg}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
            priority
          />
        </div>
        <div className="flex h-[200px] flex-col p-5">
          <Tags tags={tags} />
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2 className="my-2 line-clamp-2 text-lg font-bold">{title}</h2>
              <p className="line-clamp-2 h-[40px] text-sm text-brown-200">{summary}</p>
            </div>
            <time className="mt-2 text-xs text-brown-100">{date}</time>
          </div>
        </div>
      </Link>
    </li>
  );
};
