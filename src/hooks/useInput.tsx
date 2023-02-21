import { useState, useCallback, ChangeEvent } from 'react';

type UseInput = {
  (initialValue: string): {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onReset: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export const useInput: UseInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, setValue, onChange, onReset };
};
