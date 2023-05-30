import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectTextProps } from './AuthRedirectText.model';
import { authRedirectTextStyles } from './AuthRedirectText.styles';

export const AuthRedirectText: React.FC<AuthRedirectTextProps> = ({
  mainText,
  linkText,
  linlUrl,
}) => {
  return (
    <div css={authRedirectTextStyles}>
      {mainText}
      <Link to={linlUrl}>{linkText}</Link>
    </div>
  );
};
