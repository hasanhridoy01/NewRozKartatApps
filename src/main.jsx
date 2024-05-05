import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main/Main.jsx';
import Home from './components/MainPages/Home/Home.jsx';
import GameTopUp from './components/GameTopUp/GameTopUp.jsx';
import Vouchers from './components/Vouchers/Vouchers.jsx';
import BillPay from './components/BillPay/BillPay.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/game',
        element: <GameTopUp />
      },
      {
        path: '/vouchers',
        element: <Vouchers />
      },
      {
        path: '/billPay',
        element: <BillPay />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
