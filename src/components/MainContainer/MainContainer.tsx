import React from 'react';
import { mainContainerStyles } from './MainContainer.styles';

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div css={mainContainerStyles}>{children}</div>;
};
