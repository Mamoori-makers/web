import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';

import { API_PATH } from '@/constants/paths/apiPath';
import { getAuthRequest } from '@/libs/axios/authRequest';
import { getRequest } from '@/libs/axios/getRequest';

import { QUERY_KEY } from './queryKey';

type ChecklistItem = {
  id: number;
  isChecked: boolean;
  task: string;
};

type ChecklistTask = {
  id: number;
  task: string;
  order: number;
};

export type Checklist = {
  id: number;
  createdAt: string;
  checkedTaskCount: number;
  totalTaskCount: number;
  checklist: ChecklistItem[];
};

type TotalChecklist = {
  totalChecklistCount: number;
  page: number;
  size: number;
  latestChecklistDate: string;
  checklists: Checklist[];
};

export const useChecklistTask = (): UseQueryResult<ChecklistTask[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.checklistTask],
    queryFn: () => getRequest(API_PATH.checklistTask),
  });
};

// TODO: add mutation for modifying and deleting the checklist
export const useGetChecklist = (accessToken: string): UseQueryResult<TotalChecklist> => {
  return useQuery({
    queryKey: [QUERY_KEY.checklist, accessToken],
    queryFn: () => getAuthRequest(API_PATH.checklist, accessToken),
    enabled: !!accessToken.length,
  });
};

export const useAddChecklist = (accessToken: string) => {
  return useMutation({
    mutationFn: () => getAuthRequest(API_PATH.checklist, accessToken),
  });
};
