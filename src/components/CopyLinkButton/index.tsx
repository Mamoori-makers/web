'use client';

import { useEffect, useState } from 'react';

import { LinkIcon } from './LinkIcon';

export const CopyLinkButton = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const handleCopyLinkButtonClick = () => {
    navigator.clipboard.writeText(link);
  };

  return (
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
  );
};
