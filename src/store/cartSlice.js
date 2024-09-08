import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {
      // Stores product data and loading status
      data: [],
      status: STATUSES.IDLE,
    },
  },
  reducers: {
    addTOCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addTOCart, removeCart, setProduct, setStatus } =
  cartSlice.actions;

export default cartSlice.reducer;

// THUNK
// in thunk we return asyn function

export function fetchProduct() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonData = await res.json();
      console.log(Array.isArray(jsonData)); // Should print true if `data` is an array
      console.log(jsonData[0]); // Should log the first product object

      dispatch(setProduct(jsonData.products));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
