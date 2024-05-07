import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main/Main.jsx";
import Home from "./components/MainPages/Home/Home.jsx";
import GameTopUp from "./components/GameTopUp/GameTopUp.jsx";
import Vouchers from "./components/Vouchers/Vouchers.jsx";
import BillPay from "./components/BillPay/BillPay.jsx";
import MobileRecharge from "./components/MobileRecharge/MobileRecharge.jsx";
import AddToCart from "./components/AddToCart/AddToCart.jsx";
import CustomerInformation from "./components/CustomerInformation/CustomerInformation.jsx";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import SliderProvider from "./Provider/SliderProvider/SliderProvider.jsx";
import DataProvider from "./Provider/DataProvider/DataProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SliderProvider>
        <DataProvider>
          <Main />
        </DataProvider>
      </SliderProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <SliderProvider>
            <Home />
          </SliderProvider>
        ),
      },
      {
        path: "/game",
        element: <GameTopUp />,
      },
      {
        path: "/vouchers",
        element: <Vouchers />,
      },
      {
        path: "/billPay",
        element: <BillPay />,
      },
      {
        path: "/mobile",
        element: <MobileRecharge />,
      },
      {
        path: "/addToCart",
        element: <AddToCart />,
      },
      {
        path: "/information",
        element: <CustomerInformation />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
