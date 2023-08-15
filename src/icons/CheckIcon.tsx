export const CheckIcon = ({ strokeColor = 'black' }) => {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path
        d="M14 7L8.5 12.5L6 10"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
