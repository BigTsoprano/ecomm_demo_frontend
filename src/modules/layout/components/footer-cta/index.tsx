import UnderlineLink from "@modules/common/components/underline-link"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Autoplay} from "swiper";
import "swiper/css";

import "swiper/css/autoplay";


const FooterCTA = () => {

  const swiperParameters = {
    modules: [Autoplay],
    autoplay: { enabled: true, disableOnInteraction: false, delay: 9000 },
    speed: 600,
    loop: true,
  
  }

  return (
    <div className="bg-green-100 w-full">
      <div className="content-container items-center flex flex-col-reverse small:flex-row-reverse small:items-center justify-between py-10 gap-y-8 relative">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Shop recently added</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">View products</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full rounded aspect-square small:w-[35%] small:aspect-[28/36]">
        <Swiper {...swiperParameters} className="swiper rounded">
        <SwiperSlide className="swiper-slide rounded">
  <img
    src="/1.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/2.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/3.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/4.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/5.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/6.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/7.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/8.png"
    alt=""
    className="absolute inset-0 object-cover rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
  </SwiperSlide>
 </Swiper>
</div>

      </div>
    </div>
  )
}

export default FooterCTA
