import { useBoolean } from './useBoolean';

export const useToggleSlide = () => {
  const { booleanState, setTrue } = useBoolean(false);

  setTimeout(() => {
    setTrue();
  }, 0);

  return booleanState;
};
