type ToggleMenuIconProps = {
  isOpen: boolean;
};

export const ToggleMenuIcon = ({ isOpen }: ToggleMenuIconProps) => {
  const CLOSE_MENU_ICON = 'M6 18L18 6M6 6l12 12';
  const HAMBURGER_MENU_ICON = 'M4 6h16M4 12h16M4 18h16';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={isOpen ? CLOSE_MENU_ICON : HAMBURGER_MENU_ICON}
      />
    </svg>
  );
};
