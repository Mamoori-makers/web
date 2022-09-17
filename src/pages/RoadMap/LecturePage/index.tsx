import { useState } from 'react';

import { Category } from './Category';
import { Lectures } from './Lectures';

import { Banner } from '@/components/common/Banner';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER, LECTURES } from '@/constants/lecture';
import { Container } from '@/styles/common';

export const Lecture = () => {
  const initialLectures = LECTURES.filter(lecture => lecture.category === '죽음 준비');
  const [lectureData, setLectureData] = useState(initialLectures);

  const handleCategoryClick = (categoryName: string) => {
    const lectures = LECTURES.filter(lecture => lecture.category === categoryName);
    setLectureData(lectures);
  };

  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.lecture}
        size="large"
      />
      <Container>
        <Category onClick={handleCategoryClick} />
        <Lectures data={lectureData} />
      </Container>
    </>
  );
};
