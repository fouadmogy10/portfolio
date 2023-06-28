import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';
import img from "../../assets/certificate/HTML.PNG"
import img2 from "../../assets/certificate/JS-ES6.PNG"
import img3 from "../../assets/certificate/JS.PNG"
import img4 from "../../assets/certificate/Ract.PNG"
import img5 from "../../assets/certificate/RS.PNG"
import img6 from "../../assets/certificate/U.PNG"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: `${img}`,
      altL:"HTML-CSS"
    },
    {
      id: 2,
      link: `${img2}`,
      altL:"js-ES6"

    },
    {
      id: 3,
      link: `${img3}`,
      altL:"JS"

    },
    {
      id: 4,
      link: `${img4}`,
      altL:"REACT"
      
    },
    {
      id: 5,
      link: `${img5}`,
      altL:"Responsive-wep-page"

    },
    {
      id: 6,
      link: `${img6}`,
      altL:"Udisty"
    }
   
  ];
  return (
    <section id="testmonials">
      <h5></h5>
      <h2>My Certificate</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) =>{ 
          return (
          <SwiperSlide className="testimonial" key={test.id} >
          <img
          
        src={test.link}
        alt={test.altL}
        class="w-100 h-100"
      />
        </SwiperSlide>
        )})
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials