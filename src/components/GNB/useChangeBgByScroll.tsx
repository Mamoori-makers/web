import { useEffect, useState } from 'react';

export const useChangeBgByScroll = () => {
  const GNB_HEIGHT_PX = 64;
  const GNB_BACKGROUND_STYLE = 'linear-gradient(to right, #413C3A, #67615E)';
  const [GNBBackground, setGNBBackground] = useState(
    window.scrollY > GNB_HEIGHT_PX ? GNB_BACKGROUND_STYLE : ''
  );

  const changeGNBBackground = () => {
    window.scrollY > GNB_HEIGHT_PX ? setGNBBackground(GNB_BACKGROUND_STYLE) : setGNBBackground('');
  };

  useEffect(() => {
    window.addEventListener('scroll', changeGNBBackground);
  }, []);

  return {
    GNBBackground,
  };
};
