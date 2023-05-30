import React from 'react';
import { AuthContentContainerProps } from './AuthContentContainer.model';

export const AuthContentContainer: React.FC<AuthContentContainerProps> = ({
  children,
  styles,
}) => {
  return <div css={styles}>{children}</div>;
};
