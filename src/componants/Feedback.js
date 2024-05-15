import React from "react";
import '../css/Feedback.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import feedbackImage1 from '../image/feedback1.jpg';
import feedbackImage2 from '../image/feedback2.jpg';
import feedbackImage3 from '../image/feedback3.png';
import feedbackImage4 from '../image/feedback4.jpg';
import feedbackImage5 from '../image/feedback5.jpg';
import feedbackImage6 from '../image/feedback6.png';
function App() {
  return (
    <div className="container">
      <h1 className="heading">Feedbacks</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swipper-button-next",
          prevEl: ".swipper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={feedbackImage1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedbackImage2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedbackImage3}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedbackImage4}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedbackImage5}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedbackImage6}></img>
        </SwiperSlide>
        <div className="slider_container">
          <div className="swipper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          {/* </div> */}
          <div className="swipper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
