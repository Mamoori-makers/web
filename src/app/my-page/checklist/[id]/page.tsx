'use client';

import { useGetChecklistById } from '@/libs/react-query/useChecklist';

export default function ChecklistItemDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: checklist } = useGetChecklistById(id);

  return <div>{checklist?.progress}%</div>;
}
