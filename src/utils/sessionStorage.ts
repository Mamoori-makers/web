export const getInitDataInSessionStorage = (key: string, initialData = null) => {
  if (typeof window === 'undefined') {
    return initialData;
  }
  const storedData = sessionStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : initialData;
};
