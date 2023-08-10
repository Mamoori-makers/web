export const API_PATH = {
  user: '/api/user',
  token: '/api/token',
  will: '/api/wills',
  checklist: '/api/checklist/items',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
