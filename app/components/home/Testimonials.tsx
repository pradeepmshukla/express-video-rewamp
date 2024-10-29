"use client"
import Carousel from "@/app/utils/Carousel";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Rating from "@/app/utils/Rating";
import ToggleText from "@/app/utils/ToggleText";


const Testimonials = () => {
  const data = [
    {
      image: "/loader.png",
      rating: 3,
      name: "zoyeb",
      review: `In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.`,
    },
    {
      image: "/loader.png",
      rating: 2.5,
      name: "zoyeb",
      review: `In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.`,
    },
    {
      image: "/loader.png",
      rating: 5,
      name: "zoyeb",
      review: `In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.`,
    },
  ];

  return (
    <div className="wrapper testimonials">
      <div className="container">
        <h2 className="title">Happy Client Review</h2>
        <div className="description">
          <ToggleText text="In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available." maxLength={152} />
        </div>
        <Carousel slidesPerView={2} spaceBetween={70}>
          {data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="card">
                <Image
                  src={d.image}
                  alt="magnet"
                  width="195"
                  height="195"
                  className="border-radius-15"
                />
                <div className="review-details">
                    <Rating rating={d.rating} />
                    <div className="name">{d.name}</div>
                    <div className="review">
                      <ToggleText text={d.review}  />
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
