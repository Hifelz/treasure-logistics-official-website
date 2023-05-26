import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';


export default class Swipe extends React.Component {
  render() {
    const slides = [];

    for (let i = 1; i <= 24; i++) {
      slides.push(
        <SwiperSlide key={i} className="Slide-item">
          <img
            src={require(`../assets/img/catalog/${i}.jpg`)}
            alt={`banner ${i}`}
          />
        </SwiperSlide>
      );
    }

    return (
      <Swiper
        className="swiper-container"
        loop={true}
        loopedSlides={24}
      >
        {slides}
      </Swiper>
    );
  }
}