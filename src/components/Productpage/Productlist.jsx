import "./productlist.css";
import { addToCart } from "../../store/cartSlice";
import { useToast } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useData } from "../../hooks/useData";
import { ImSpinner } from "react-icons/im";
import { TbError404 } from "react-icons/tb";

const Productlist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isLoading, isError, filterData } = useData();

  if (isLoading) {
    return (
      <div className="loader">
        <ImSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        <TbError404 />
      </div>
    );
  }

  const handleAddToCart = (id, image, title, price) => {
    const product = { id, image, title, price, quantity: 1 };
    dispatch(addToCart(product));

    toast({
      title: "Product Added",
      description: `${title} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      {Array.isArray(filterData) && filterData.length > 0 ? (
        filterData.map(({ id, image, title, price, rating }) => (
          <div key={id} className="item-cart">
            <div className="product-img">
              <img className="product-picture" src={image} alt={title} />
            </div>

            <div
              className={
                rating.rate > 3 ? "product-rating" : "product-rating-rating"
              }
            >
              <p>{rating.rate}</p>
            </div>
           

            <div className="product-details">
              <div className="tilte-product">
                <h2>{title.slice(0, 20)}...</h2>
              </div>
              
              <span
                className="add-icon"
                onClick={() => handleAddToCart(id, image, title, price)}
              >
                <LuShoppingCart />
              </span>
              {/* </div> */}
            </div>
            <div className="price-div">
              <p>USD {price}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-product">
          <h1>No Product Available</h1>
        </div>
      )}
    </>
  );
};

export default Productlist;
