import { dehydrate, Hydrate } from '@tanstack/react-query';
import { ReactNode } from 'react';

import getQueryClient from '@/libs/react-query/getQueryClient';
import { QUERY_KEY } from '@/libs/react-query/queryKey';

export default async function MyPageLayout({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: [QUERY_KEY.user] });
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
