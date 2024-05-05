import { Button, Grid, Typography } from "@mui/material";
import img1 from "../../../assets/Images/GameCD/item.png";
import img2 from "../../../assets/Images/GameCD/item 1.png";
import img3 from "../../../assets/Images/GameCD/item 2.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Arrivals.css";

// import required modules
import { Pagination } from "swiper/modules";

const Arrivals = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="" style={{ display: "flex", marginBottom: "20px" }}>
        <Typography
          sx={{
            textAlign: "left",
            marginRight: "auto",
          }}
          variant="h6"
          gutterBottom
        >
          New Arrivals <span style={{ fontWeight: 400 }}>(9)</span>
        </Typography>
        <Button
          sx={{
            textAlign: "right",
            marginLeft: "auto",
            float: "right",
            textDecoration: "underline",
          }}
          type="link"
        >
          View All
        </Button>
      </div>

      {/* <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img1} alt="" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img2} alt="" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img3} alt="" />
        </Grid>
      </Grid> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Arrivals;
