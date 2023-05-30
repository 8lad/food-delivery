import { css } from '@emotion/react';
import { AllFonts, MainAlign, MainColors } from '../../../utils/styleConstants';

export const authRedirectTextStyles = css`
  display: block;
  width: 100%;
  margin-top: 24px;
  text-align: ${MainAlign.TEXT_CENTER};
  font-size: 18px;
  line-height: 28px;
  font-family: ${AllFonts.POPPINS_REGULAR};
  a {
    margin-left: 5px;
    font-family: ${AllFonts.POPPINS_BOLD};
    color: ${MainColors.ACCENT_COLOR};
  }
`;
