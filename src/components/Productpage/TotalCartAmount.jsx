import React, { useEffect, useReducer } from "react";
import { NavLink } from "react-router-dom";

const TotalCartAmount = ({ subTotal }) => {
  const reducer = (state, action) => {
    let adjustFinalAmount = action.subTotal || subTotal;

    let newAmount = adjustFinalAmount;

    if (state.freeDelivery) {
      newAmount -= 2;
    }
    if (state.flatRate) {
      newAmount -= 1;
    }

    // if (state.localArea) {
    //   newAmount -= 15;
    // }
    switch (action.type) {
      case "TOGGLE_FREE_DELIVERY":
        return {
          ...state,
          freeDelivery: !state.freeDelivery,
          finalAmount: !state.freeDelivery ? newAmount - 2 : newAmount + 2,
        };
      case "TOGGLE_FLATE-RATE":
        return {
          ...state,
          flatRate: !state.flatRate,
          finalAmount: !state.freeDelivery ? newAmount - 1: newAmount + 1,
        };
      // case "TOGGLE_LOCAL_AREA":
      //   return {
      //     ...state,
      //     localArea: !state.localArea,
      //     finalAmount: !state.localArea ? newAmount - 15 : newAmount + 15,
      //   };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    finalAmount: subTotal || 0, // Ensure finalAmount starts with subTotal or 0
    freeDelivery: false,
    flatRate: false,
    // localArea: false,
  });

  useEffect(() => {
    dispatch({ type: "RESET_TOTAL", subTotal }); // Reset total based on the subTotal prop when it changes
  }, [subTotal]);
  return (
    <>
      <h2>Cart Totals</h2>
      <div className="subtotal">
        <h3>Subtotal</h3>
        <h3>${subTotal.toFixed(2)}</h3>
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
          {/* <div className="checkboxes">
            <input
              type="checkbox"
              name="localArea"
              checked={state.localArea}
              onChange={() => dispatch({ type: "TOGGLE_LOCAL_AREA" })}
            />
            <label htmlFor="localArea">Local Area</label>
          </div> */}
        </div>
        <div className="checkboxes-amount">
          <p>$2</p>
          <p>$1</p>
          {/* <p>$1</p> */}
        </div>
      </div>

      <div className="cartfinal-total">
        <h3>Total</h3>
        <h4>${subTotal.toFixed(2)}</h4>
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
