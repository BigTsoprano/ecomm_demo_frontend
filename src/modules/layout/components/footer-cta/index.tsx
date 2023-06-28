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
          <h3 className="text-xl-semi">Shop recently added</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">View products</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
        <Swiper {...swiperParameters} className="swiper">
        <SwiperSlide className="swiper-slide">
  <img
    src="/1.png"
    alt=""
    className="absolute inset-0 object-cover "
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/2.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/3.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/4.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/5.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/6.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/7.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
  <img
    src="/8.png"
    alt=""
    className="absolute inset-0 object-cover"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
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
