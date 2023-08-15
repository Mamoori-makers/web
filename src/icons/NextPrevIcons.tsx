const color = {
  disabled: '#cccac8',
  enabled: '#67615E',
};

export const NextIcon = ({ enabled = false }) => {
  return (
    <svg
      viewBox="0 0 3 6"
      width="7"
      height="7"
      className="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
    >
      <path
        d="M0 0L3 3L0 6"
        stroke={enabled ? color.enabled : color.disabled}
        fill={enabled ? color.enabled : color.disabled}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const PrevIcon = ({ enabled = false }) => {
  return (
    <svg
      viewBox="0 0 3 6"
      width="7"
      height="7"
      className="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
    >
      <path
        d="M3 0L0 3L3 6"
        stroke={enabled ? color.enabled : color.disabled}
        fill={enabled ? color.enabled : color.disabled}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
