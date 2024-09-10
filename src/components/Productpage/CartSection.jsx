import { useSelector } from "react-redux";
import "./cartsection.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useEffect } from "react";

const CartSection = () => {
  const cartItems = useSelector((state) => state.cart.data);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  }, [cartItems]);
  // console.log(cartItems);
  // let storeCartLocalStorage = localStorage.getItem("Cart");
  // if (!storeCartLocalStorage) {
  //   return (storeCartLocalStorage = []);
  // } else {
  //   cartItems.push(storeCartLocalStorage);
  // }

  // console.log(storeCartLocalStorage);

  return (
    <section className="main-cart-cart">
      <div className="cart">
        <div className="cart-title">
          <h1>Total Cart Item:</h1>
        </div>
        <div className="product-cart-details">
          <div className="cart-info">
            <img
              className="cart-images"
              src="/long-sleeve-shirt.png"
              alt="product-icon"
            />
            <h3>Product Detail</h3>
          </div>

          <div className="cart-info">
            <img
              className="cart-images"
              src="/best-price.png"
              alt="price-icon"
            />
            <h3>Price</h3>
          </div>

          <div className="cart-info">
            <img className="cart-images" src="/all.png" alt="totalPrice-icon" />
            <h3>Total</h3>
          </div>

          <div className="cart-info">
            <img className="cart-images" src="/eye.png" alt="eye-icon" />
            <h3>Quantity</h3>
          </div>
        </div>

        {cartItems.map(({ id, image, titel, price, quantity }) => (
          <div className="cart-products-detail">
            <div key={id} className="product">
              <img className="item-img" src={image} alt={titel} />
              <h2>{titel}</h2>
            </div>

            <div className="product">
              <p>USD {price}</p>
            </div>

            <div className="product">
              <p>USD 110</p>
            </div>

            <div className="product">
              <div className="quantity">
                <div className="quanity-count">
                  <p>-</p>
                  <h3>{quantity}</h3>
                  <p>+</p>
                </div>
                <div className="remove-btn">
                  <MdOutlineCancelPresentation />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartSection;
