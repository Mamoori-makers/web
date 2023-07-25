import Image from 'next/image';
import Link from 'next/link';

import { gradientTextStyle } from '@/constants/classNames/gradientTextStyle';

const ROADMAP_CONTENTS = [
  {
    title: 'Step 1. Handbook으로 배우기',
    description:
      '매일 꺼내볼 수 있는 핸드북에서는 죽음과 관련된 다양한 자료들을 찾아보고, 배워볼 수 있어요.',
    link: '/roadmap/handbook',
    image: '/assets/roadmap/handbook.png',
  },
  {
    title: 'Step 2. 유서 작성하기',
    description:
      '유서를 작성해 보신 적이 없는 여러분들을 위해, 어떻게 작성해야 하는지 가이드를 준비했어요.',
    link: '/roadmap/will',
    image: '/assets/roadmap/last-will.png',
  },
  {
    title: 'Step 3. 체크리스트로 확인하기',
    description:
      '죽음에 대해 준비가 어느 정도로 되어 있는지 문항들을 체크해보고, 부족한 부분은 보완해 보아요.',
    link: '/roadmap/checklist',
    image: '/assets/roadmap/checklist.png',
  },
];

export default function Roadmap() {
  return (
    <div>
      <p className="my-2 text-sm font-bold text-yellow-700 lg:text-base">
        Empower Your Preparedness with Mamoori
      </p>
      <div className="mb-3 text-xl font-bold lg:text-2xl">
        <h2>자신감 있는 마무리를 위하여,</h2>
        <h2 className={gradientTextStyle}>죽음을 대비하는 체계적인 로드맵</h2>
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
