import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../swiper/styles.css"

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function SwiperSlice() {
  return (
    <>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/6.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/7.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/8.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.masterok.tj/assets/images/carousel/web/9.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
