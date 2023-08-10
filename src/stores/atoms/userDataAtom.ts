import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { getInitDataInSessionStorage } from '@/utils/sessionStorage';

import { ATOM_KEY } from './atomKey';

const storage = createJSONStorage(() => sessionStorage);

export const userDataAtom = atomWithStorage(
  ATOM_KEY.userData,
  getInitDataInSessionStorage(ATOM_KEY.userData),
  storage
);
