import { IconTitle } from '@/components/IconTitle';
import { ROADMAP_STEPS } from '@/constants/textData/roadmapData';
import { WILL_GUIDE } from '@/constants/textData/willGuideData';

type WillGuideContent = {
  subtitle: string;
  description: string;
};

type WillGuideItem = {
  title: string;
  contents: WillGuideContent[];
};

const WillGuideItem = ({ title, contents }: WillGuideItem) => {
  return (
    <div className="mb-12 mt-6">
      <h2 className="rounded-lg bg-brown-100 p-3 text-xl font-bold text-white">{title}</h2>
      <div className="p-1">
        {contents.map(({ subtitle, description }) => {
          return (
            <div key={subtitle} className="my-3">
              <h3 className="text-lg font-semibold">{subtitle}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Will() {
  return (
    <div className="roadmap-container">
      <IconTitle data={ROADMAP_STEPS.step2} />
      {WILL_GUIDE.map(({ title, contents }) => (
        <WillGuideItem key={title} title={title} contents={contents} />
      ))}
    </div>
  );
}
