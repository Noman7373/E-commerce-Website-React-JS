import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

import store from "./store/store.js";
import { ProductProvider } from "./components/Context/Providercontext.jsx";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </ChakraProvider>
);
