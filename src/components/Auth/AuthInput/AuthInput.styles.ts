import { css } from '@emotion/react';
import {
  AllFonts,
  AllRadiuses,
  BackgroundColors,
  MainColors,
  TextColors,
} from '../../../utils/styleConstants';

export const authInputStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 384px;
  width: 100%;
  background-color: ${BackgroundColors.AUTH_INPUTS_BG};
  border-radius: ${AllRadiuses.MAIN};
  &:focus-within {
    svg {
      path {
        fill: ${MainColors.ACCENT_COLOR};
      }
    }
  }
  input {
    padding: 25px 50px 25px 79px;
    border: none;
    background-color: transparent;
    border: 2px solid transparent;
    width: 100%;
    border-radius: inherit;
    transition: all 0.5s;
  }
  input:focus,
  input:hover {
    border: 2px solid ${MainColors.ACCENT_COLOR};
    outline: none;
    color: ${MainColors.ACCENT_COLOR};
  }
  input::placeholder {
    text-transform: uppercase;
    font-family: ${AllFonts.MANROPE_SEMI_BOLD};
    font-size: 17px;
    line-height: 25px;
    color: ${TextColors.AUTH_PLACEHOLDER_COLOR};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 100px ${BackgroundColors.AUTH_INPUTS_BG} inset !important;
    border: 2px solid ${MainColors.ACCENT_COLOR};
  }
  svg {
    position: absolute;
  }
  svg:first-of-type {
    left: 23px;
  }
  svg:last-child {
    right: 28px;
    cursor: pointer;
  }
`;
