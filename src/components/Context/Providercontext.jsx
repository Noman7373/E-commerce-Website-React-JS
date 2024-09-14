import { createContext, useEffect, useState } from "react";
// import reducer from "../Context/Reducer";
export const ProductsList = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [filterData, setFilter]
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [searchItem, setSearchItem] = useState("");

  // const handleSearch = (e) => {
  //   setSearchItem(e.target.value);
  // };

  useEffect(() => {
    const fatchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonData = await res.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    fatchData();
  }, []);

  return (
    <ProductsList.Provider
      value={{
        data,
        isLoading,
        isError,
        // searchItem,
        // setSearchItem,
        // handleSearch,
      }}
    >
      {children}
    </ProductsList.Provider>
  );
};

// const initialState = {
//   isLoading: false,
//   isError: false,
// };

// const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({type : "SET_LOADING"})
// isLoading =false
// console.log(jsonData);

// STATUSES.IDLE
// dispatch({type : "API_ERROR"})
