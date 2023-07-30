'use client';

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { LinkIcon } from './LinkIcon';

export const CopyLinkButton = () => {
  const [link, setLink] = useState('');

  const notifyCopied = () => toast('링크가 복사되었습니다.');

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const handleCopyLinkButtonClick = () => {
    navigator.clipboard.writeText(link);
    notifyCopied();
  };

  return (
    <>
      <button
        className="truncate rounded-md bg-stone-400 p-2 drop-shadow-md"
        type="button"
        onClick={handleCopyLinkButtonClick}
      >
        <div className="flex items-center justify-center">
          <LinkIcon />
          <span className="ml-1 text-sm font-light tracking-widest text-white">Copy Link</span>
        </div>
      </button>
      <Toaster
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          style: {
            background: 'rgb(214 211 209)',
          },
        }}
      />
    </>
  );
};
