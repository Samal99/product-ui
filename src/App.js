import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from "./layouts/DefaultLayout"

import Home from "./pages/UserProfile"
import Coupon from "./pages/DiscountCoupon"
import Sells from "./pages/MySellList"
import Order from './pages/MyOrder';
import Wallet from './pages/MyWallet';
import Offer from './pages/SuperOffer';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/coupon",
          element: <Coupon />,
        },
        {
          path: "/sells",
          element: <Sells />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
        {
          path: "/wallet",
          element: <Wallet />,
        },
        {
          path: "/offers",
          element: <Offer />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: '*/*',
      element: <Login/>,
    },

  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
