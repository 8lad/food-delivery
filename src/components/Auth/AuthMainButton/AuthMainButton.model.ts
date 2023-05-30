type AuthButtonType = 'submit' | 'button';

export interface AuthMainButtonProps {
  text: string;
  onClick: () => void;
  type?: AuthButtonType;
  isDisabled?: boolean;
}
