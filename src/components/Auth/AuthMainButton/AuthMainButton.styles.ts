import { css } from '@emotion/react';
import {
  AllFonts,
  AllRadiuses,
  MainAlign,
  MainColors,
  TextColors,
} from '../../../utils/styleConstants';

export const authMainButtonStyles = css`
  max-width: 384px;
  width: 100%;
  background-color: ${MainColors.ACCENT_COLOR};
  border-radius: ${AllRadiuses.MAIN};
  font-family: ${AllFonts.POPPINS_SEMI_BOLD};
  color: ${TextColors.AUTH_MAIN_BUTTON_COLOR};
  text-align: ${MainAlign.TEXT_CENTER};
  padding: 22px 20px;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 25px;
  border: 2px solid ${MainColors.ACCENT_COLOR};
  transition: all 0.5s;
  &:hover {
    color: ${MainColors.ACCENT_COLOR};
    background-color: ${TextColors.AUTH_MAIN_BUTTON_COLOR};
  }
`;
