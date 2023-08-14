import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API_PATH } from '@/constants/paths/apiPath';
import { getAuthRequest, postAuthRequest } from '@/libs/axios/authRequest';
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
  progress: number;
  checklist: ChecklistItem[];
};

type TotalChecklist = {
  totalChecklistCount: number;
  page: number;
  size: number;
  latestChecklistDate: string | null;
  checklists: Checklist[];
};

export const useChecklistTask = (): UseQueryResult<ChecklistTask[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.checklistTask],
    queryFn: () => getRequest(API_PATH.checklistTask),
  });
};

export const useGetChecklist = (): UseQueryResult<TotalChecklist> => {
  return useQuery({
    queryKey: [QUERY_KEY.checklist],
    queryFn: () => getAuthRequest(API_PATH.checklist),
  });
};

export type AddChecklistPayloadType = Omit<ChecklistItem, 'task'>;

export const useAddChecklist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (checklistData: AddChecklistPayloadType[]) =>
      postAuthRequest(API_PATH.checklist, checklistData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.checklist] }),
    onError: (error: AxiosError) => {
      const response = error.response;
      return response?.data;
    },
  });
};
