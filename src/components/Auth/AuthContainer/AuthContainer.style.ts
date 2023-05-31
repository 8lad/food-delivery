import { css } from '@emotion/react';
import {
  AllFonts,
  MainAlign,
  MainColors,
  TextColors,
} from '../../../utils/styleConstants';

export const authContainerStyles = css`
  max-height: 100vh;
  overflow-y: auto;
  max-width: 777px;
  width: 100%;
  padding: 32px 48px 48px 48px;
  display: flex;
  flex-direction: column;
`;

export const logoContainerStyles = css`
  max-width: 53px;
  maigin: ${MainAlign.BLOCK_LEFT};
`;

export const linksContainerStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  a {
    color: ${TextColors.LINK_TEXT_COLOR};
    font-family: ${AllFonts.POPPINS_MEDIUM}
    font-size: 16px;
    line-height: 24px;
    transition: all 0.5s;
  }
  a:hover {
    color: ${MainColors.ACCENT_COLOR};
  }
`;

export const childrenContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
