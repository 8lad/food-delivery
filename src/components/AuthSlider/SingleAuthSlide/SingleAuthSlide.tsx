import React from 'react';
import {
  imagesContainer,
  mainSlideImage,
  slideContainer,
  slideText,
  slideTitle,
} from './SingleAuthSlide.styles';
import { SingleSlide } from './SingleAuthSlide.model';

type SingleAuthSlideProps = SingleSlide;

export const SingleAuthSlide: React.FC<SingleAuthSlideProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <div css={slideContainer}>
      <div css={imagesContainer}>
        <img
          css={mainSlideImage}
          src={image}
          alt='the plate with food'
        />
      </div>
      <h2 css={slideTitle}>{title}</h2>
      <p css={slideText}>{text} </p>
    </div>
  );
};
