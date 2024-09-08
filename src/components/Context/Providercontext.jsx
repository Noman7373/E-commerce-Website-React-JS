// import { createContext, useEffect, useState } from "react";

// export const ProductsList = createContext();

// export const ProductProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fatchData = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const jsonData = await res.json();
//         setData(jsonData);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fatchData();
//   }, []);
//   return (
//     <ProductsList.Provider value={{ data }}>{children}</ProductsList.Provider>
//   );
// };
