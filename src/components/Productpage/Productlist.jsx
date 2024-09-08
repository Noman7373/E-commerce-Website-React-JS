import React, { useEffect } from "react";
import "./productlist.css";
import { IoStarSharp } from "react-icons/io5";

import { fetchProduct, STATUSES } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Productlist = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.cart.products); // Use 'cart' as it matches your slice name
  console.log("Product Data:", data);
  let star = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    console.log("loading");
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    console.log("error");

    return <h2>There was an error loading the products.</h2>;
  }

  return (
    <>
      {data && data > 0 ?
        data.map(({ id, image, title, price }) => (
          <div key={id} className="item-cart">
            <div className="product-img">
              <img src={image} alt={title} />
            </div>

            <div className="product-rating">
              {star.map((index) => (
                <IoStarSharp key={index} />
              ))}
            </div>

            <div className="product-details">
              <h2>{title}</h2>
              <p>
                USD {price} <span></span>
              </p>
              <div className="addtocart-btn">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          
        )) : (
          <h2>No Data Available</h2>
        )
      } 
          
        
    </>
  );
};

export default Productlist;
