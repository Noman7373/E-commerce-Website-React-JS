import { useContext } from "react";
import { ProductsList } from "../Context/Providercontext";

const useData = () => {
  const context = useContext(ProductsList);

  if (context === undefined || context === null) {
    throw new Error("useData must be used within a ProductsProvider");
  }
  const {
    data,
    filterData,
    isLoading,
    isError,
    handleSearch,
    handleSorting,
    user,
    token,
    logIn,
    logOut,
  } = context;

  return {
    data,
    filterData,
    isLoading,
    isError,
    handleSearch,
    handleSorting,
    user,
    token,
    logIn,
    logOut,
  };
};

export default useData;
