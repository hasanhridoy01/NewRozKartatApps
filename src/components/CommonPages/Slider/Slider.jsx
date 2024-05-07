import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/Images/Slider/1.webp";
import slider2 from "../../../assets/Images/Slider/2.webp";
import slider3 from "../../../assets/Images/Slider/3.webp";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

import "./Slider.css";

import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Slider = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const [banners, setBanners] = useState();

  // Fetch the API data
  const fetchBanner = async () => {
    try {
      const response = await axios.get(
        "https://dev-api.kartat.io/api/cms/init"
      );
      console.log(response.data.data);
      const bannersData = response.data.data.banners ?? [];

      const filteredBanners = bannersData.filter(banner => banner.name === "main");

      if (Array.isArray(filteredBanners) && filteredBanners.length > 0) {
        const allMedias = filteredBanners.flatMap((banner) => banner.medias ?? []);
        setBanners(allMedias);
        console.log(banners);
      } else {
        console.log("Banners data is empty or not an array.");
      }
    } catch (error) {
      console.error("Error fetching banner:", error);
      throw error;
    }
  };

  // Using Effect
  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div
      style={{
        display: isSmallScreen ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        marginLeft: "10px",
        marginRight: "10px",
        overflow: "hidden",
        border: "none",
      }}
    >
      <Container sx={{ border: "none" }}>
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
          {banners?.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img className="sliderImages" src={banner.attachment} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
