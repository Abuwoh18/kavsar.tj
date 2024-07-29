import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../components/swiperData/swiperData.css";

// import required modules
import {EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperData() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiperData"
      >
        <SwiperSlide className="swiper-slide1">
          <img src="https://www.krasdom.com/gfotobig/120506.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://feshmebel.com.ua/image/cache/catalog/Fenster/Divan/Kreslo-Milano/kreslo-milano-5-1000x1000.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://www.neopoliscasa.ru/image_webp/j/jurnalnyiy_stolik_Sinergy_(komplekt_iz_2)-TONIN_CASA-MODERN_75484_31_2.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://miol.sumy.ua/getimage/products/34__.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://jazz-way.com/upload/iblock/86f/5yv8dd9ks23nex4wjpzjf70jpk84ouk8/Accu7-L10W%20LiION_3.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://www.bizon.tj/image/cache/catalog/products/1934-500x500-product_popup.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkO8xZIwczmh6o3H5dlfhrHtALud99fuGvRA&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <img src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/8770/otreznoy-disk-abrazivnyy-po-metallu-lugaabrasiv-25x1-6x22-23-1666149481441-lg.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <h1>дальши показана на продукте</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
