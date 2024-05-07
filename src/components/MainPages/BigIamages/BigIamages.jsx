import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/Images/Frame 1000003079.png";

import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";

import "./BigIamages.css";
const BigIamages = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ border: 'none' }}
        >
          <SwiperSlide>
            <img className="sliderImages" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={img1} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default BigIamages;
