import React from 'react';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './CarouselOpinions.css';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function CarouselOpinions() {
  return (
    <div className="opinion-container">
      <Swiper
        effect={'coverflow'}
        slidesPerView={4}
        spaceBetween={60}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 60,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper">
        <SwiperSlide className="card-opinion">
          <div className="card-content">
            <div className="layer"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, gravida at risus vel, fermentum gravida lorem. Aenean ac
              blandit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card-user">
              <div className="card-user-name">Anne-Laure</div>
              <div className="card-user-job">Développeuse</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselOpinions;
