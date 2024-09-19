import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

import store from "./store/store.js";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductProvider } from "./Context/Providercontext.jsx";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </ChakraProvider>
);
