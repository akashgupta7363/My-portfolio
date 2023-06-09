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
      avatar: av2,
      name: "Rohit Rai",
      review:
        "Working with Akash was a game-changer for our team. His professionalism, attention to detail, and ability to translate our vision into reality surpassed our expectations. We highly recommend his services.",
    },
    {
      avatar: av1,
      name: "Tina Snow",
      review:
        "Akash understood our requirements and delivered a visually appealing and user-friendly website that perfectly captured our brand identity. He implemented responsive design, optimized site performance, and integrated e-commerce functionalities.",
    },
    {
      avatar: av3,
      name: "Alex lawson",
      review:
        "Akash is a talented web developer who possesses a deep understanding of both design principles and coding languages. They created a sleek and user-friendly website for our startup, incorporating innovative features and seamless navigation. We are thrilled with the results and look forward to working with Akash on future projects.",
    },
    {
      avatar: av4,
      name: "Fatima Mallick",
      review:
        "We approached Akash for assistance with our e-commerce website, and we couldn't be happier with the outcome. Their technical expertise and knowledge of online sales strategies helped us optimize our website for conversions. Thanks to Akash, our online sales have skyrocketed, and our customers are delighted with the improved user experience.",
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
