import { atom } from 'jotai';

export const accessTokenAtom = atom('');

export const readWriteAccessToken = atom(
  (get) => get(accessTokenAtom),
  (get, set, newAccessToken: string) => set(accessTokenAtom, newAccessToken)
);
