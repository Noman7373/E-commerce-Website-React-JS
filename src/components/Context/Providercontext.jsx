import { createContext, useEffect, useReducer, useState } from "react";
export const ProductsList = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleSearch = (e) => {
    const searchProduct = e.target.value;
    if (searchProduct === "") {
      setFilterData(data);
    } else {
      const productFilter = data?.filter((item) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
      setFilterData(productFilter);
    }
  };

  // /============  Sorting function   ===========/

  const handleSorting = (event) => {
    let valueSort = event.target.value;
    let sortedData;
    if (valueSort === "lowest") {
      sortedData = [...data].sort((a, b) => a.price - b.price);
    } else if (valueSort === "highest") {
      sortedData = [...data].sort((a, b) => b.price - a.price);
    } else if (valueSort === "a - z") {
      sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "z - a") {
      sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "sort") {
      sortedData = [...data];
    }
    setFilterData(sortedData);
  };

  useEffect(() => {
    const fatchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const jsonData = await res.json();
        setData(jsonData);
        setFilterData(jsonData);
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
        filterData,
        isLoading,
        isError,
        handleSearch,
        handleSorting,
      }}
    >
      {children}
    </ProductsList.Provider>
  );
};

// ======================  Dispatch Method For Sort  =============

// const initialState = {
//   sortingProductValue: "lowest",
//   data: [],
// };

// const productPrice = (state, action) => {
//   switch (action.type) {
//     case "GET_SORTING-VALUE":
//       console.log("Sorting value:", action.payload); // Log sorting value for debugging
//       return {
//         ...state,
//         sortingProductValue: action.payload,
//       };

//     case "SORTING_PRODUCT":
//       let newSortData;

//       const { data, sortingProductValue } = state;

//       let tempSortProduct = [data];

//       const finalSortingProduct = (a, b) => {
//         if (sortingProductValue === "lowest") {
//           return a.price - b.price;
//         }

//         if (sortingProductValue === "highest") {
//           return b.price - a.price;
//         }

//         if (sortingProductValue === "a-z") {
//           return a.title.localeCompare(b.title);
//         }

//         if (sortingProductValue === "z-a") {
//           return b.title.localeCompare(a.title);
//         }
//       };

//       newSortData = tempSortProduct.sort(finalSortingProduct);

//       return {
//         ...state,
//         data: newSortData,
//       };
//     default:
//       return state;
//   }
// };

// const handleSorting = (event) => {
//   let userValue = event.target.value.toLowerCase();
//   dispatch({ type: "GET_SORTING-VALUE", payload: userValue });
// };
