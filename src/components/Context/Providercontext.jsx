import { createContext, useEffect, useState } from "react";

export const ProductsList = createContext();

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonData = await res.json();
        setData(jsonData);
        STATUSES.IDLE
      } catch (error) {
        console.log(error);
      }
    };
    fatchData();
  }, []);
  return (
    <ProductsList.Provider value={{ data }}>{children}</ProductsList.Provider>
  );
};
