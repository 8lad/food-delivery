import { css } from '@emotion/react';
import { AllFonts, MainAlign, TextColors } from '../../../utils/styleConstants';

export const authTitleStyles = css`
  color: ${TextColors.AUTH_TITLE_COLOR};
  text-align: ${MainAlign.TEXT_CENTER};
  font-family: ${AllFonts.POPPINS_SEMI_BOLD};
  font-size: 35.25px;
  line-height: 125%;
  letter-spacing: -0.04em;
`;
