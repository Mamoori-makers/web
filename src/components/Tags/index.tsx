import { Tag } from '@/lib/notion/types';

const TAG_COLOR = {
  red: '#E03D3Eb3',
  orange: '#D9730Bb3',
  yellow: '#DFAB00b3',
  green: '#0E7B6Cb3',
  blue: '#0C6E99b3',
  pink: '#AD1972b3',
  brown: '#64473Ab3',
  purple: '#693FA5b3',
  gray: '#878682b3',
};

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <div>
      {tags.map(({ id, name, color }) => (
        <span
          key={id}
          className="mr-1 inline-block rounded-3xl px-3 py-[2px] text-xs font-extralight tracking-widest text-white"
          style={{ backgroundColor: TAG_COLOR[color] }}
        >
          #{name}
        </span>
      ))}
    </div>
  );
};
