import { atom } from 'jotai';

export const loginStateAtom = atom(false);

export const readWriteLoginState = atom(
  (get) => get(loginStateAtom),
  (get, set, newLoginState: boolean) => {
    return set(loginStateAtom, newLoginState);
  }
);
