import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/layout';
import {
  Home,
  RoadMap,
  Community,
  Insurance,
  My,
  NotFound,
  Will,
  WillGuide,
  WillList,
  Lecture,
  CheckList,
  NewWill,
} from '@/pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="roadmap" element={<RoadMap />} />
        <Route path="roadmap/lecture" element={<Lecture />} />
        <Route path="roadmap/will" element={<Will />}>
          <Route path="guide" element={<WillGuide />} />
          <Route path="list" element={<WillList />} />
          <Route path="new" element={<NewWill />} />
        </Route>
        <Route path="roadmap/checklist" element={<CheckList />} />
        <Route path="community" element={<Community />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="my" element={<My />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
