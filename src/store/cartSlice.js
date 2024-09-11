import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: initialCart,
    // status: STATUSES.IDLE,
  },

  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.data.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity || 1; // Increment quantity
      } else {
        state.data.push({ ...product, quantity: product.quantity || 1 }); // Add new product
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeCart(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload); // Filter data array
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    clearCart(state, action) {
      state.data = []; // Clear the cart in the Redux state
      localStorage.removeItem("cart"); // Remove only the cart data from localStorage
    },
    increment(state, action) {
      const productId = action.payload; // The ID of the product to increment
      const product = state.data.find((item) => item.id === productId);

      if (product && product.quantity < 25) {
        product.quantity += 1; // Increment the quantity
      }
    },
    decreament(state, action) {
      const productId = action.payload; // The ID of the product to increment
      const product = state.data.find((item) => item.id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1; // Increment the quantity
      }
    },
  },
});

export const { addToCart, removeCart, clearCart, increment, decreament } =
  cartSlice.actions;

export default cartSlice.reducer;

// THUNK
// in thunk we return async function

// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const jsonData = await res.json();

//       dispatch(setProduct(jsonData)); // Populate state with fetched product data
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
