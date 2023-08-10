import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);

export const loginStateAtom = atomWithStorage('isLoggedIn', false, storage);
