import React from 'react';
import { AuthSocialButtonProps } from './AuthSocialButton.model';
import { authSocialButtonStyles } from './AuthSocialButton.style';

export const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  socialIcon,
}) => {
  return <button css={authSocialButtonStyles}>{socialIcon}</button>;
};
