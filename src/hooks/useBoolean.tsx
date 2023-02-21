import { useCallback, useState } from 'react';

export const useBoolean = (initialState: boolean) => {
  const [booleanState, setBooleanState] = useState(initialState);

  const setTrue = useCallback(() => setBooleanState(true), []);
  const setFalse = useCallback(() => setBooleanState(false), []);
  const setToggle = useCallback(() => setBooleanState(prev => !prev), []);

  return { booleanState, setTrue, setFalse, setToggle };
};
