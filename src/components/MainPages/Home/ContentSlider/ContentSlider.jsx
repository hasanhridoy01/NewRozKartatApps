import { Grid } from "@mui/material";
import img1 from "../../../../assets/Images/homeSlider/Screenshot_2.png";
import img2 from "../../../../assets/Images/homeSlider/item.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ContentSlider.css";

// import required modules
import { Pagination } from "swiper/modules";

const ContentSlider = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <>
        <Grid container alignItems="center" justifyContent="center">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
          </Swiper>
        </Grid>
      </>
    </div>
  );
};

export default ContentSlider;
