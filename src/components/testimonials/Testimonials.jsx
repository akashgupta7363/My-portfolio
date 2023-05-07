import React from "react";
import "./testimonials.css";
import av1 from "../../assets/avatar1.jpg";
import av2 from "../../assets/avatar2.jpg";
import av3 from "../../assets/avatar3.jpg";
import av4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Testimonials() {
  const data = [
    {
      avatar: av1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam delectus vel voluptas autem adipisci explicabo nulla voluptatem rerum officia beatae cumque corporis ea expedita, laudantium dolor aliquid fugiat id consectetur, amet quibusdam nihil?",
    },
    {
      avatar: av2,
      name: "Luke Skywalker",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam delectus vel voluptas autem adipisci explicabo nulla voluptatem rerum officia beatae cumque corporis ea expedita, laudantium dolor aliquid fugiat id consectetur, amet quibusdam nihil?",
    },
    {
      avatar: av3,
      name: "Alex lawson",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam delectus vel voluptas autem adipisci explicabo nulla voluptatem rerum officia beatae cumque corporis ea expedita, laudantium dolor aliquid fugiat id consectetur, amet quibusdam nihil?",
    },
    {
      avatar: av4,
      name: "Robert Frost",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam delectus vel voluptas autem adipisci explicabo nulla voluptatem rerum officia beatae cumque corporis ea expedita, laudantium dolor aliquid fugiat id consectetur, amet quibusdam nihil?",
    },
  ];
  return (
    <section id="tesimonials">
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          580: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {data.map((avt, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avt.avatar} alt="avatar" />
              </div>
              <h5>{avt.name}</h5>
              <small className="client_review">{avt.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
