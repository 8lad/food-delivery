import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SingleAuthSlide } from './SingleAuthSlide/SingleAuthSlide';
import { mockSlider } from './mockSliderData';

import { sliderMainContainer } from './AuthSlider.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './AuthSlider.scss';

export const AuthSlilder = () => {
  return (
    <div css={sliderMainContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={2500}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {mockSlider.map(({ title, image, text }, index) => (
          <SwiperSlide>
            <SingleAuthSlide
              key={index}
              title={title}
              image={image}
              text={text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
