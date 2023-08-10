import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { getInitDataInSessionStorage } from '@/utils/sessionStorage';

import { ATOM_KEY } from './atomKey';

const storage = createJSONStorage(() => sessionStorage);

export const loginStateAtom = atomWithStorage(
  ATOM_KEY.isLoggedIn,
  getInitDataInSessionStorage(ATOM_KEY.isLoggedIn),
  storage
);
