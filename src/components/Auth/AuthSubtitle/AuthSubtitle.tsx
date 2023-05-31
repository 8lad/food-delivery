import React from 'react';
import { AuthSubtitleProps } from './AuthSubtitle.model';
import { authSubtitleStyles } from './AuthSubtitle.styles';

export const AuthSubtitle: React.FC<AuthSubtitleProps> = ({ text }) => {
  return <div css={authSubtitleStyles}>{text}</div>;
};
