import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API_PATH } from '@/constants/paths/apiPath';
import { deleteAuthRequest, getAuthRequest, postAuthRequest } from '@/libs/axios/authRequest';
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
  prevId: number | null;
  nextId: number | null;
  checklist: ChecklistItem[];
};

type TotalChecklist = {
  totalChecklistCount: number;
  page: number;
  size: number;
  latestChecklistDate: string | null;
  checklists: Checklist[];
};

type TodayChecklist = {
  isTodayChecklistCreated: boolean;
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

export const useGetTodayChecklist = (): UseQueryResult<TodayChecklist> => {
  return useQuery({
    queryKey: [QUERY_KEY.todayChecklist],
    queryFn: () => getAuthRequest(API_PATH.todayChecklist),
  });
};

export const useGetChecklistById = (id = ''): UseQueryResult<Checklist> => {
  return useQuery({
    queryKey: [QUERY_KEY.checklist, id],
    queryFn: () => getAuthRequest(`${API_PATH.checklist}/${id}`),
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

export const useDeleteChecklist = (id: string) => {
  const QueryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteAuthRequest(`${API_PATH.checklist}/${id}`),
    onSuccess: () => QueryClient.invalidateQueries({ queryKey: [QUERY_KEY.checklist] }),
    onError: (error: AxiosError) => {
      const response = error.response;
      return response?.data;
    },
  });
};
