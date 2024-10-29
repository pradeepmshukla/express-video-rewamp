"use client";

import Image from "next/image";
import Carousel from "@/app/utils/Carousel";
import { SwiperSlide } from "swiper/react";

const HomeSlideShow = () => {
  return (
    <Carousel>
      <SwiperSlide>
        <Image
          src="https://dummyimage.com/1700x693/000/fff"
          width={1700}
          height={693}
          alt="dummy1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://dummyimage.com/1700x693/000/000000"
          width={1700}
          height={693}
          alt="dummy2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://dummyimage.com/1700x693/000/ff0000"
          width={1700}
          height={693}
          alt="dummy3"
        />
      </SwiperSlide>
    </Carousel>
  );
};

export default HomeSlideShow;
