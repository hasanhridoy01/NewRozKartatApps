import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/Images/Slider/1.webp";
import slider2 from "../../../assets/Images/Slider/2.webp";
import slider3 from "../../../assets/Images/Slider/3.webp";
import { useMediaQuery } from '@mui/material';

import "./Slider.css";

import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div
      style={{
        display: isSmallScreen ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        marginLeft: "10px",
        marginRight: "10px",
        overflow: 'hidden',
        border: 'none'
      }}
    >
      <Container sx={{ border: 'none' }}>
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
        >
          <SwiperSlide>
            <img className="sliderImages" src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="sliderImages" src={slider3} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
