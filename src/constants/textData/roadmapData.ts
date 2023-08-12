export const ROADMAP_STEPS = {
  step1: {
    id: 'handbook',
    title: 'Step 1. Handbook으로 배우기',
    subtitle: 'Embracing Lifelong Learning',
    image: '/assets/roadmap/handbook.png',
  },
  step2: {
    id: 'will',
    title: 'Step 2. 유서 작성하기',
    subtitle: 'Crafting Your Legacy',
    image: '/assets/roadmap/last-will.png',
  },
  step3: {
    id: 'checklist',
    title: 'Step 3. 체크리스트로 확인하기',
    subtitle: 'Assessing Readiness Checklist',
    image: '/assets/roadmap/checklist.png',
  },
};

export const ROADMAP_CONTENTS = [
  {
    ...ROADMAP_STEPS.step1,
    description:
      '매일 꺼내볼 수 있는 핸드북에서는 죽음과 관련된 다양한 자료들을 찾아보고, 배워볼 수 있어요.',
    link: '/roadmap/handbook',
  },
  {
    ...ROADMAP_STEPS.step2,
    description:
      '유서를 작성해 보신 적이 없는 여러분들을 위해, 어떻게 작성해야 하는지 가이드를 준비했어요.',
    link: '/roadmap/will',
  },
  {
    ...ROADMAP_STEPS.step3,
    description:
      '죽음에 대해 준비가 어느 정도로 되어 있는지 문항들을 체크해보고, 부족한 부분은 보완해 보아요.',
    link: '/roadmap/checklist',
  },
];
