import { css } from '@emotion/react';
import { AllFonts, MainAlign, TextColors } from '../../utils/styleConstants';

export const forgetPasswordLinkStyles = css`
  text-align: ${MainAlign.TEXT_RIGHT};
  margin-top: 13px;
  font-size: 15px;
  line-height: 23px;
  font-family: ${AllFonts.POPPINS_REGULAR};
  display: block;
  color: ${TextColors.AUTH_FORGET_PASSWORD_COLOR};
`;

export const contentContainerStyles = css`
  max-width: 383px;
  width: 100%;
  margin-top: 80px;
  label {
    margin-top: 24px;
  }
  button {
    margin-top: 20px;
  }
`;
