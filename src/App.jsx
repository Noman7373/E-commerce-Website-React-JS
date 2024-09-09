import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/pages/AppLayout";
import Main from "./components/Main";
import Productlist from "./components/Productpage/Productlist";
import Productcart from "./components/Productcart";
import CartSection from "./components/Productpage/CartSection";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
