import React from 'react';
import { AuthMainButtonProps } from './AuthMainButton.model';
import { authMainButtonStyles } from './AuthMainButton.styles';

export const AuthMainButton: React.FC<AuthMainButtonProps> = ({
  text,
  onClick,
  type = 'button',
  isDisabled,
}) => {
  return (
    <button
      css={authMainButtonStyles}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
