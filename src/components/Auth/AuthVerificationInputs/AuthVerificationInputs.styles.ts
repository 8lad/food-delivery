import { css } from '@emotion/react';
import {
  AllFonts,
  BackgroundColors,
  MainAlign,
  MainColors,
} from '../../../utils/styleConstants';

export const authVerificationInputsStyles = css`
  display: flex;
  margin-top: 43px;
  input {
    max-width: 77px;
    font-family: ${AllFonts.POPPINS_EXTRA_LIGHT};
    font-size: 62px;
    line-height: 93px;
    border: none;
    color: ${MainColors.ACCENT_COLOR};
    border-bottom: 2px solid
      ${BackgroundColors.AUTH_VERIFICATION_INPUTS_BORDER_BG};
    text-align: ${MainAlign.TEXT_CENTER};
  }
  input:not(:last-child) {
    margin-right: 27px;
  }
  input.active,
  input:focus {
    outline: none;
    border-bottom: 2px solid ${MainColors.ACCENT_COLOR};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
