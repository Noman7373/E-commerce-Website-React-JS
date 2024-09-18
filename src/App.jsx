import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/pages/AppLayout";
import Main from "./components/Main";

import Productcart from "./components/Productcart";
import CartSection from "./components/Productpage/CartSection";

import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";
import Signup from "./Authantication/signup/Signup";
import Signin from "./Authantication/signin/Signin";
import Forgotpassword from "./Authantication/forgotpassword/Forgotpassword";
import Forgotpasswordsent from "./Authantication/forgotSent/Forgotpasswordsent";
import Resetpassword from "./Authantication/resetpassword/Resetpassword";
import Bestseller from "./components/Productpage/Bestseller";

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
          path: "/bestseller",
          element: <Bestseller />,
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
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/forgot-password",
          element: <Forgotpassword />,
        },
        {
          path: "/forgotpassword-sent",
          element: <Forgotpasswordsent />,
        },
        {
          path: "/reset-password",
          element: <Resetpassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
