import { css } from '@emotion/react';
import {
  AllRadiuses,
  BackgroundColors,
  MainAlign,
  MainColors,
} from '../../../utils/styleConstants';

export const authSocialButtonStyles = css`
  max-width: 184px;
  width: 100%;
  display: flex;
  padding: 25px 15px;
  border: 2px solid transparent;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: ${AllRadiuses.MAIN};
  background-color: ${BackgroundColors.AUTH_INPUTS_BG};
  margin: ${MainAlign.BLOCK_CENTER};
  margin-top: 48px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    border: 2px solid ${MainColors.ACCENT_COLOR};
  }
`;
