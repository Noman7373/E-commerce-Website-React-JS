import { useDispatch, useSelector } from "react-redux";
import "./cartsection.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
  clearCart,
  decreament,
  increment,
  removeCart,
} from "../../store/cartSlice";
import { useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import TotalCartAmount from "./TotalCartAmount";

const CartSection = () => {
  const toast = useToast();
  const cartItems = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const handleRemoveCart = (id, title) => {
    dispatch(removeCart(id));
    toast({
      title: "Product Removed",
      description: `${title} has been removed from your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    if (cartItems.length === 0) {
      toast({
        title: "Cart is already Empty!",
        isClosable: true,
        duration: 1000,
      });
    } else {
      toast({
        title: "Cart is Empty",
        isClosable: true,
        duration: 1000,
      });
    }
  };

  // calculte the SubTotal
  const subTotal = cartItems.reduce(
    (acc, items) => acc + items.price * items.quantity,
    0
  );

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

        <div className="products-details-totalamount-section">
          <div className="CartTotal-section">
            {cartItems.length > 0 ? (
              cartItems.map(({ id, image, title, price, quantity }) => (
                <div className="cart-products-detail">
                  <div key={id} className="product">
                    <img className="item-img" src={image} alt={title} />
                    <h2>{title.slice(0, 22)}...</h2>
                  </div>

                  <div className="product">
                    <p>USD {price}</p>
                  </div>

                  <div className="product">
                    <p>USD {(price * quantity).toFixed(2)}</p>
                  </div>

                  <div className="product">
                    <div className="quantity">
                      <div className="quanity-count">
                        <p onClick={() => dispatch(decreament(id))}>-</p>
                        <h3>{quantity}</h3>
                        <p onClick={() => dispatch(increment(id))}>+</p>
                      </div>
                      <div
                        className="remove-btn"
                        onClick={() => handleRemoveCart(id, title)}
                      >
                        <MdOutlineCancelPresentation />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <h1>Your Cart is Empty!</h1>
              </div>
            )}
            <div className="bottom-btns">
              <div className="Continue-Shopping">
                <NavLink to="/shop">
                  <button>Continue Shopping</button>
                </NavLink>
              </div>
              <div className="clear-btn">
                <button onClick={() => handleClearCart()}>Clear Cart</button>
              </div>
            </div>
          </div>

          <div className="total-amount-section">
            {/* Import the Totalamount Component */}
            <TotalCartAmount subTotal = {subTotal} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
