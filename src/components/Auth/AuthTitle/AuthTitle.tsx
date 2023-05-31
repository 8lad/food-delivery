import React from 'react';
import { authTitleStyles } from './AuthTitle.styles';

interface AuthTitleProps {
  text: string;
}

export const AuthTitle: React.FC<AuthTitleProps> = ({ text }) => {
  return <h1 css={authTitleStyles}>{text}</h1>;
};
