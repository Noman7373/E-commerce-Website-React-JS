import React from "react";
import "./productlist.css";
import { IoStarSharp } from "react-icons/io5";
import useData from "../../hooks/useData";
const Productlist = () => {
  const { data } = useData();
  let star = [1, 2, 3, 4, 5];

  const handleAddToCart = () => {
    let productLocalStorage = localStorage.getItem("productItmes");
    if (!productLocalStorage) {
      productLocalStorage = [];
    } else {
      productLocalStorage = JSON.parse(productLocalStorage);
    }

    productLocalStorage.push(data);

    localStorage.setItem("productItems", JSON.stringify(productLocalStorage));

    console.log("Product added to cart:", data);
  };
  return (
    <>
      {data &&
        data.map(({ id, image, title, price }) => (
          <div key={id} className="item-cart">
            <div className="product-img">
              <img src={image} alt="" />
            </div>

            <div className="product-rating">
              {star.map((item, index) => (
                <IoStarSharp key={index} />
              ))}
            </div>

            <div className="product-details">
              <h2>{title}</h2>
              <p>
                USD {price} <span></span>
              </p>
              <div className="addtocart-btn">
                <button onClick={() => handleAddToCart()}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Productlist;
