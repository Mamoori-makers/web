'use client';

import Link from 'next/link';

import { useActiveMenu } from '@/hooks/useActiveMenu';

import { RoadmapIcon } from './RoadmapIcon';

const ROADMAP_PATH = {
  index: '/roadmap',
  handbook: '/roadmap/handbook',
  will: '/roadmap/will',
  checklist: '/roadmap/checklist',
};

const ROADMAP_MENU = [
  { name: 'Handbook', link: ROADMAP_PATH.handbook },
  { name: 'Will', link: ROADMAP_PATH.will },
  { name: 'Checklist', link: ROADMAP_PATH.checklist },
];

export const RoadmapMenu = () => {
  const { isActiveMenu, isActiveMenuExact } = useActiveMenu();
  const isRoadmapPage = isActiveMenuExact(ROADMAP_PATH.index);
  const roadmapIconColor = isRoadmapPage ? '#fff' : 'rgb(120 113 108)';

  return (
    <div className="mx-auto flex w-full justify-center bg-stone-300 px-3 py-2 text-stone-500">
      <div className="flex w-full max-w-3xl items-center justify-evenly">
        <Link
          href={ROADMAP_PATH.index}
          className="rounded-lg p-1"
          style={{
            backgroundColor: isRoadmapPage ? '#67615e' : '',
          }}
        >
          <RoadmapIcon color={roadmapIconColor} />
        </Link>
        {ROADMAP_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link) ? 'font-semibold bg-[#67615e] text-white' : '';

          return (
            <Link
              key={name}
              href={link}
              className={`${activeStyle} min-w-[60px] rounded-lg p-2 text-center`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
