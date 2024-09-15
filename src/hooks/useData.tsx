import { useContext } from "react";
import { ProductsList } from "../components/Context/Providercontext";

export const useData = () => {
  const {
    data,
    filterData,
    isLoading,
    isError,
    handleSearch,
    handleSorting,
 
  } = useContext(ProductsList);
  return {
    data,
    filterData,
    isLoading,
    isError,
    handleSearch,
    handleSorting,
    
  };
};
