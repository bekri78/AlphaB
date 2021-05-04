import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import axios from 'axios';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './CarouselOpinions.css';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function CarouselOpinions() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/ratings')
      .then((response) => response.data)
      .then((data) => {
        setResults(data);
      });
  }, []);

  console.log(results);

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
            <p>{results[0].message}</p>
            <div className="card-user">
              <div className="card-user-name">{`${results[0].firstname} ${results[0].lastname.charAt(0)}.`}</div>
              <div className="card-user-job">{results[0].job}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselOpinions;
