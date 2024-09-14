import { useContext } from "react";
import { ProductsList } from "../components/Context/Providercontext";

export const useData = () => {
  const { data, isLoading, isError } =
    useContext(ProductsList);
  return {
    data,
    isLoading,
    isError,
    // searchItem,
    // setSearchItem,
    // handleSearch,
  };
};

// export default useData;
