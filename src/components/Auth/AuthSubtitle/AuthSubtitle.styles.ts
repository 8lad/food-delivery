import { css } from '@emotion/react';
import { AllFonts, MainAlign, TextColors } from '../../../utils/styleConstants';

export const authSubtitleStyles = css`
  margin-top: 29px;
  font-family: ${AllFonts.POPPINS_MEDIUM};
  text-align: ${MainAlign.TEXT_CENTER};
  color: ${TextColors.AUTH_SUBTITLE_COLOR};
  font-size: 23px;
  line-height: 29px;
`;
