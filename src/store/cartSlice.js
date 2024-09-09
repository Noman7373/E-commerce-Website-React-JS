import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    name: "products",
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    addTOCart(state, action) {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If it doesn't exist, add the new item
        state.data.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeCart(state, action) {
      return state.data = state.data.filter((item) => item.id !== action.payload.id); // Filter data array
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
// in thunk we return async function

export function fetchProduct() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonData = await res.json();

      dispatch(setProduct(jsonData)); // Populate state with fetched product data
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
