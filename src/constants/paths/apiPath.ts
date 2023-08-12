export const API_PATH = {
  user: '/api/user',
  token: '/api/token',
  checklist: '/api/checklist',
  checklistTasks: '/api/checklist/tasks',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
