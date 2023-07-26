import { IconTitle } from '@/components/IconTitle';
import { ROADMAP_STEPS } from '@/constants/roadmapData';

export default function Handbook() {
  return (
    <div>
      <IconTitle data={ROADMAP_STEPS.step1} />
    </div>
  );
}
