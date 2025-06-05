import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Bobby Orgun",
    review:
      "I have collaborated with Bryson, and he possesses impressive software development capabilities.",
  },
  {
    avatar: AVATAR2,
    name: "Francis Issacs",
    review:
      "Bryson has an impressive attention to detail skill and he easily catches the nitty gritty details in the work environment.",
  },
  {
    avatar: AVATAR3,
    name: "Ochieng Obuku",
    review:
      "Bryson posses great debugging and backend skills that have been helpful in building and developing APIs that can scale.",
  },
  {
    avatar: AVATAR4,
    name: "Bruce Tilla",
    review:
      "Great communication and collaboration skills that make him a good team player.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatars" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
