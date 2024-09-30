// SliderProvider.js
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const sliderContext = createContext(null);

const SliderProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);

  // Fetch the API data
  const fetchBanner = async (name) => {
    try {
      const response = await axios.get(
        ""
      );
      const bannersData = response.data.data.banners ?? [];

      const filteredBanners = bannersData.filter(
        (banner) => banner.name === name
      );

      if (filteredBanners.length > 0) {
        const allMedias = filteredBanners.flatMap(
          (banner) => banner.medias ?? []
        );
        setBanners(allMedias);
        return allMedias;
      } else {
        console.log("Banners data is empty or not an array.");
      }
    } catch (error) {
      console.error("Error fetching banner:", error);
    }
  };

  // Using Effect
  useEffect(() => {
    fetchBanner(); 
  }, []); 

  return <sliderContext.Provider value={{ fetchBanner, banners }}>{children}</sliderContext.Provider>;
};

export default SliderProvider;