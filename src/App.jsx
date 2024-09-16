import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/pages/AppLayout";
import Main from "./components/Main";

import Productcart from "./components/Productcart";
import CartSection from "./components/Productpage/CartSection";

import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Main />
              <Productcart />
              <AboutUs />
              <Contactus />
            </>
          ),
        },
        {
          path: "/shop",
          element: <Productcart />,
        },
        {
          path: "/cart",
          element: <CartSection />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contactus />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
