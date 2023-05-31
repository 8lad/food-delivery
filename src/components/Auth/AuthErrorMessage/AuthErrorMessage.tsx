import React from 'react';
import { authErrorMessageStyles } from './AuthErrorMessage.styles';
import { AuthErrorMessageProps } from './AuthErrorMessage.model';

export const AuthErrorMessage: React.FC<AuthErrorMessageProps> = ({
  errorText,
}) => {
  return <p css={authErrorMessageStyles}>{errorText}</p>;
};
