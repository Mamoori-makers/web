import { useState } from 'react';

export const useChangeBgByScroll = () => {
  const [GNBBackground, setGNBBackground] = useState('');

  const changeGNBBackground = () => {
    const GNB_HEIGHT_PX = 64;
    if (window.scrollY > GNB_HEIGHT_PX) {
      setGNBBackground('linear-gradient(to right, #413C3A, #67615E)');
    } else {
      setGNBBackground('');
    }
  };

  window.addEventListener('scroll', changeGNBBackground);

  return {
    GNBBackground,
  };
};
