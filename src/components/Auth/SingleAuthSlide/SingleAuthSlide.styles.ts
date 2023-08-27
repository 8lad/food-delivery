import { css } from '@emotion/react';
import { AllFonts, MainAlign, MainColors } from '../../../utils/styleConstants';
import backgroundAbsrtactImg from '../../../assets/images/pattern.png';

export const slideContainer = css`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  color: ${MainColors.MAIN_WHITE_COLOR};
  text-align: ${MainAlign.TEXT_CENTER};
`;
export const imagesContainer = css`
  padding-top: 20px;
  position: relative;
  background-image: url(${backgroundAbsrtactImg});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mainSlideImage = css`
  position: relative;
  max-width: 546px;
`;

export const slideTitle = css`
  margin-top: 20px;
  font-size: 40px;
  line-height: 44px;
  font-family: ${AllFonts.MANROPE_EXTRA_BOLD};
`;

export const slideText = css`
  font-family: ${AllFonts.MANROPE_MEDIUM};
  line-height: 21px;
  font-size: 14px;
  max-width: 488px;
  margin: ${MainAlign.BLOCK_CENTER};
  margin-top: 20px;
`;
