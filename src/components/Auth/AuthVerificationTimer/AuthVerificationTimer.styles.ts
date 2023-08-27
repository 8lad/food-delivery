import { css } from '@emotion/react';
import { AllFonts, MainColors } from '../../../utils/styleConstants';

export const authVerificationTimerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 63px;
  margin-top: 32px;
  color: ${MainColors.ACCENT_COLOR};
  font-family: ${AllFonts.POPPINS_LIGHT};
  font-size: 21px;
  line-height: 32px;
  span {
    display: inline-block;
    width: 30px;
    padding: 0 1px;
  }
`;
