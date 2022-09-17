import * as S from './style';

export type ButtonProps = {
  size?: 'large' | 'medium' | 'small';
  color?: 'black' | 'white';
  background?: 'yellow' | 'brown';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  text: string;
};

export const Button = ({
  size = 'large',
  color = 'black',
  background = 'yellow',
  type = 'button',
  onClick,
  text,
  disabled,
}: ButtonProps) => {
  return (
    <S.Button
      size={size}
      background={background}
      color={color}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </S.Button>
  );
};
