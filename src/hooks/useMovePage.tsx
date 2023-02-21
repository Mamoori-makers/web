/* eslint-disable no-param-reassign */
import { useNavigate } from 'react-router-dom';

type UseMovePage = (path: string | string[]) => (() => void)[];

export const useMovePage: UseMovePage = path => {
  const navigate = useNavigate();

  if (typeof path === 'string') {
    path = [path];
  }

  return path.map(p => () => navigate(p));
};
