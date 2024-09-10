import "./productlist.css";
import { IoStarSharp } from "react-icons/io5";

import { addToCart } from "../../store/cartSlice";
import { useToast } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import useData from "../../hooks/useData";

const Productlist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { data } = useData();

  const handleAddToCart = (id, image, title, price) => {
    const product = { id, image, title, price, quantity: 1 };
    dispatch(addToCart(product));

    toast({
      title: "Product Added",
      description: `${title} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map(({ id, image, title, price, rating }) => (
          <div key={id} className="item-cart">
            <div className="product-img">
              <img className="product-picture" src={image} alt={title} />
            </div>

            <div className="product-rating">
              {Array(Math.round(rating.rate)) // Assuming rating object has a "rate" field
                .fill()
                .map((_, index) => (
                  <IoStarSharp key={index} />
                ))}
            </div>

            <div className="product-details">
              <h2>{title.slice(0, 25)}...</h2>
              <p>USD {price}</p>
              <div className="addtocart-btn">
                <span
                  className="add-icon"
                  onClick={() => handleAddToCart(id, image, title, price)}
                >
                  <LuShoppingCart />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>No Product Available</h2>
      )}
    </>
  );
};

export default Productlist;
