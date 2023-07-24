'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type BannerProps = {
  bannerData: {
    imageName: string;
    mainText: string;
    subText: readonly string[] | [];
  };
};

export const Banner = ({ bannerData }: BannerProps) => {
  const { imageName, mainText, subText } = bannerData;
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlide(true);
    }, 0);
  }, []);

  return (
    <div className="relative  h-[400px] bg-brown-200 lg:h-[500px]">
      <Image src={`/assets/banner/${imageName}`} fill alt="background" priority />
      <div
        className="absolute bottom-1/2 flex w-full flex-col text-center text-white opacity-50"
        style={{
          opacity: `${slide && '1'}`,
          transition: `${slide && '1s'}`,
          bottom: `${slide && '35%'}`,
        }}
      >
        <p
          className="m-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:mb-7 lg:text-5xl"
          style={{ textShadow: '3px 3px 13px #413c3a' }}
        >
          {mainText}
        </p>
        {subText.map((text, i) => (
          <p
            className="mx-7 text-base lg:text-xl"
            key={i}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
