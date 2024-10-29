/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Navigation, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({
  slidesPerView = 1,
  spaceBetween = 0,
  children,
}: {
  slidesPerView?: number;
  spaceBetween?: number;
  children: any;
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Autoplay, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
    >
      {children}
      <div className="swiper-button-prev swiper-btns">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="swiper-button-next swiper-btns">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </Swiper>
  );
};

export default Carousel;
