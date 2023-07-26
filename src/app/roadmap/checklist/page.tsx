import { IconTitle } from '@/components/IconTitle';
import { ROADMAP_STEPS } from '@/constants/roadmapData';

export default function Checklist() {
  return (
    <div>
      <IconTitle data={ROADMAP_STEPS.step3} />
    </div>
  );
}
