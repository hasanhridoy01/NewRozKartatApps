import { Outlet } from "react-router-dom";

/* Font-Family */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "../../components/CommonPages/Header/Header";
import Slider from "../../components/CommonPages/Slider/Slider";
import Footer from "../../components/CommonPages/Footer/Footer";

import "./Main.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  //auto open popup..................!
  useEffect(() => {
    const lastClosed = localStorage.getItem("popupLastClosed");
    if (lastClosed) {
      const timePassed = Date.now() - parseInt(lastClosed, 10);
      if (timePassed >= 12000) {
        setIsVisible(true);
      } else {
        const remainingTime = 12000 - timePassed;
        setTimeout(() => {
          setIsVisible(true);
        }, remainingTime);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  //set close on this popup..............!
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popupLastClosed", Date.now().toString());
    setTimeout(() => {
      setIsVisible(true);
    }, 12000);
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {isVisible && (
        <div
          style={{
            backgroundColor: "#FFFAE7",
            width: "300px",
            padding: "15px 25px",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "72%",
            top: "11%",
            zIndex: 1000,
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
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
            <h5 style={{ color: "#EE6C3E", fontSize: "15px", fontWeight: 450 }}>
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
              lineHeight: "20px",
              textAlign: "justify",
            }}
          >
            We want to ensure you get the most out of your experience with us.
            By saving your order history, Wishlist items, and loyalty points,
            you'll have easy access to everything you love. Plus, you'll be
            first in line for exclusive offers just for you!
          </p>
        </div>
      )}
      <Header />
      <Slider />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
