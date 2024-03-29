export const API_PATH = {
  user: '/api/user',
  token: '/api/token',
  checklist: '/api/checklist',
  checklistTask: '/api/checklist/tasks',
  todayChecklist: '/api/checklist/today',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
