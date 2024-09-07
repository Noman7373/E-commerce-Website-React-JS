import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./components/Context/Providercontext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
