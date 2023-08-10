import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);

export const userDataAtom = atomWithStorage('userData', null, storage);
