import { rest } from 'msw';

import { API_PATH } from '@/constants/paths/apiPath';

import type { RestRequest, ResponseComposition, DefaultBodyType, RestContext } from 'msw';

const getTodayChecklist = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json({ isTodayChecklistCreated: true }));
};

const checklistHandler = [rest.get(API_PATH.todayChecklist, getTodayChecklist)];

export default checklistHandler;
