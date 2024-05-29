import { Container } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import ProductCardSmall from "./ProductCardSmall/ProductCardSmall";
import GiftCard from "../GiftCard/GiftCard";
import ContentSlider from "./ContentSlider/ContentSlider";
import GameCard from "../GameCard/GameCard";
import BigIamages from "../BigIamages/BigIamages";
import GameCD from "../GameCD/GameCD";
import Arrivals from "../Arrivals/Arrivals";
import Recommended from "../Recommended/Recommended";
import { useEffect } from "react";

import "./Home.css";

const Home = () => {
  //handleClose
  const handleClose = () => {
    document.getElementById("popup").style.display = "none";
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("popup").style.display = "block";
    }, 1000);
  }, []);

  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <div
        style={{
          backgroundColor: "#FFFAE7",
          width: "300px",
          padding: "15px 25px",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "71%",
          top: "23%",
          zIndex: 2,
        }}
        id="popup"
        className="popup-animation"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0px",
          }}
        >
          <h5 style={{ color: "orange", fontSize: "15px" }}>
            Hi! You are not <span style={{ fontWeight: 900 }}>logged in</span>{" "}
            yet.
          </h5>
          <button
            style={{
              color: "#c5c5c5",
              backgroundColor: "#fff",
              border: "none",
              cursor: "pointer",
              padding: "4px 10px", // Adjust padding for the desired button size
              borderRadius: "20px", // Adjust the border radius as needed
              fontSize: "24px",
            }}
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
        <h6
          style={{
            fontSize: "14px",
            marginTop: "0px",
            fontWeight: 300,
            marginBottom: "12px",
            fontStyle: "italic",
          }}
        >
          Make sure you unlock your membership.
        </h6>
        <p
          style={{
            fontSize: "12px",
            marginTop: "0px",
            fontWeight: 400,
            lineHeight: "19px",
            textAlign: "justify-all",
          }}
        >
          We want to ensure you get the most out of your experience with us. By
          saving your order history, Wishlist items, and loyalty points, you'll
          have easy access to everything you love. Plus, you'll be first in line
          for exclusive offers just for you!
        </p>
      </div>

      <Container>
        <ProductCard />
        <ProductCardSmall />
        <GiftCard />
        <ContentSlider />
        <GameCard />
        <BigIamages />
        <GameCD />
        <Arrivals />
        <Recommended />
      </Container>
    </div>
  );
};

export default Home;
