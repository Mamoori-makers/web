import { ROUTE } from '@/constants/routes';

export const BANNER = {
  main: '당신을 위해 준비한 마무리 로드맵.',
  sub: ['죽음 준비의 길잡이가 되어드릴게요.', '하나하나 차근차근 배워봐요.'],
};

export const STEPS = [
  {
    stepNum: 1,
    title: '강의 듣기',
    contents: ['Mamoori가 엄선한 영상들로', '죽음에 대해 통찰하는 시간을 가져보세요.'],
    imgUrl: '',
    link: ROUTE.lecture,
  },
  {
    stepNum: 2,
    title: '유서 쓰기',
    contents: ['유서 가이드를 따라가며', '법적 효력이 있는 유서를 작성해보세요.'],
    imgUrl: '',
    link: ROUTE.will,
  },
  {
    stepNum: 3,
    title: '체크리스트 작성하기',
    contents: ['나의 죽음 준비 정도를', '다양한 문항들로 체크해보세요.'],
    imgUrl: '',
    link: ROUTE.checklist,
  },
];
