import { MdOutlineCancelPresentation } from "react-icons/md";
import "./cartsection.css";
import { useSelector } from "react-redux";

const CartSection = () => {
  const { products } = useSelector((stata) => stata.cart);

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

        <div className="cart-products-detail">
          <div className="product">
            <img className="item-img" src="/long-sleeve-shirt.png" alt="" />
            <h2>Name</h2>
          </div>

          <div className="product">
            <p>USD 110</p>
          </div>

          <div className="product">
            <p>USD 110</p>
          </div>

          <div className="product">
            <div className="quantity">
              <div className="quanity-count">
                <p>-</p>
                <h3>01</h3>
                <p>+</p>
              </div>
              <div className="remove-btn">
                <MdOutlineCancelPresentation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
