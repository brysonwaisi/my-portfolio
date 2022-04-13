import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'Bobby Orgun',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque leo ante, sit amet mattis felis faucibus faucibus. Morbi facilisis eros vitae felis consectetur, placerat sollicitudin dui lobortis. Donec efficitur nisl vel metus commodo accumsan. Maecenas congue a ex eget fringilla. Nunc eu orci venenatis, bibendum felis eget, molestie est.'
  },
  {
    avatar: AVATAR2,
    name: 'Francis Issacs',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque leo ante, sit amet mattis felis faucibus faucibus. Morbi facilisis eros vitae felis consectetur, placerat sollicitudin dui lobortis. Donec efficitur nisl vel metus commodo accumsan. Maecenas congue a ex eget fringilla. Nunc eu orci venenatis, bibendum felis eget, molestie est.'
  },
  {
    avatar: AVATAR3,
    name: 'Ochieng Obuku',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque leo ante, sit amet mattis felis faucibus faucibus. Morbi facilisis eros vitae felis consectetur, placerat sollicitudin dui lobortis. Donec efficitur nisl vel metus commodo accumsan. Maecenas congue a ex eget fringilla. Nunc eu orci venenatis, bibendum felis eget, molestie est.'
  },
  {
    avatar: AVATAR4,
    name: 'Bruce Tilla',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque leo ante, sit amet mattis felis faucibus faucibus. Morbi facilisis eros vitae felis consectetur, placerat sollicitudin dui lobortis. Donec efficitur nisl vel metus commodo accumsan. Maecenas congue a ex eget fringilla. Nunc eu orci venenatis, bibendum felis eget, molestie est.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials