import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => {
  return sessionStorage;
});

export type UserData = {
  userId: number;
  email: string;
  name: string;
};

export const userDataAtom = atomWithStorage('userData', null, storage);
