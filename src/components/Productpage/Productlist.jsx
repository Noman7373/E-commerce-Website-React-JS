import React, { useEffect } from "react";
import "./productlist.css";
import { IoStarSharp } from "react-icons/io5";

import { addTOCart, fetchProduct, STATUSES } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";

const Productlist = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.cart);

  // console.log("Product Data:", data);
  const star = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>There was an error loading the products.</h2>;
  }

  const handleAddToCart = (id, image, title, price) => {
    const product = { id, image, title, price };
    dispatch(addTOCart(product));
    console.log(product);

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
        data.map(({ id, image, title, price }) => (
          <div key={id} className="item-cart">
            <div className="product-img">
              <img className="product-picture" src={image} alt={title} />
            </div>

            <div className="product-rating">
              {star.map((index) => (
                <IoStarSharp key={index} />
              ))}
            </div>

            <div className="product-details">
              <h2>{title}</h2>
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
