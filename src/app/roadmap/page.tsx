import Image from 'next/image';
import Link from 'next/link';

import { ROADMAP_CONTENTS } from '@/constants/roadmapData';

export default function Roadmap() {
  return (
    <div>
      <p className="my-2 text-sm font-bold text-yellow-700 lg:text-base">
        Empower Your Preparedness with Mamoori
      </p>
      <div className="mb-3 text-xl font-bold lg:text-2xl">
        <h2>자신감 있는 마무리를 위하여,</h2>
        <h2 className="bg-gradient-to-r from-yellow-800 to-yellow-600 bg-clip-text text-transparent">
          죽음을 대비하는 체계적인 로드맵
        </h2>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        {ROADMAP_CONTENTS.map(({ title, description, link, image }) => {
          return (
            <Link
              href={link}
              key={title}
              className="inline-block rounded-md border-2 border-stone-200 p-5"
            >
              <Image src={image} alt={title} width={40} height={40} />
              <h2 className="my-2 text-base font-semibold lg:text-lg">{title}</h2>
              <p className="text-sm text-stone-500 lg:text-base">{description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
