import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const initialState = {
  freeDelivery: false,
  flatRate: false,
  localArea: false,
//   subTotal : subTotal,
};
const TotalCartAmount = ({ subTotal }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reducer = (state ,action) => {
    switch (action.type) {
        case "":
            
            break;
    
        default:
            break;
    }
  }
  return (
    <>
      <h2>Cart Totals</h2>
      <div className="subtotal">
        <h3>Subtotal</h3>
        <h4>{subTotal.toFixed(2)}</h4>
      </div>
      <h3 className="shipping-cart">Shipping</h3>
      <div className="shipping-free">
        <div className="main-checkboxes">
          <div className="checkboxes">
            <input
              type="checkbox"
              name="freeDelivery"
              checked={state.freeDelivery}
              onChange={() => dispatch({ type: "TOGGLE_FREE_DELIVERY" })}
            />
            <label htmlFor="freeDelivery">Free Delivery</label>
          </div>
          <div className="checkboxes">
            <input
              type="checkbox"
              name="flatRate"
              checked={state.flatRate}
              onChange={() => dispatch({ type: "TOGGLE_FLATE-RATE" })}
            />
            <label htmlFor="flatRate">Flat Rate</label>
          </div>
          <div className="checkboxes">
            <input
              type="checkbox"
              name="localArea"
              checked={state.localArea}
              onChange={() => dispatch({ TOGGLE_LOCAL_AREA })}
            />
            <label htmlFor="localArea">Local Area</label>
          </div>
        </div>
        <div className="checkboxes-amount">
          <p>$5</p>
          <p>$10</p>
          <p>$15</p>
        </div>
      </div>

      <div className="cartfinal-total">
        <h3>Total</h3>
        <h4>$1234.00</h4>
      </div>

      <div className="checkout-btn">
        <NavLink>
          <button>Procced To Checkout</button>
        </NavLink>
      </div>
    </>
  );
};
export default TotalCartAmount;
