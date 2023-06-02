import React from 'react';
import { AuthSocialButtonProps } from './AuthSocialButton.model';
import { authSocialButtonStyles } from './AuthSocialButton.style';
import { Link } from 'react-router-dom';

export const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  socialIcon,
  socialNetworkUrl,
}) => {
  return (
    <Link
      to={socialNetworkUrl}
      css={authSocialButtonStyles}
    >
      {socialIcon}
    </Link>
  );
};
