import React from 'react';
import { Link } from 'react-router-dom';
import { MainLogo } from '../../Icons/MainLogo';
import {
  authContainerStyles,
  childrenContainer,
  linksContainerStyles,
} from './AuthContainer.style';

interface AuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div css={authContainerStyles}>
      <div>
        <MainLogo />
      </div>
      <div css={childrenContainer}>{children}</div>
      <div css={linksContainerStyles}>
        <Link to='https://google.com'>Privacy Policy</Link>
        <Link to='https://google.com'>Copyright 2022</Link>
      </div>
    </div>
  );
};
