// import { createSlice } from "@reduxjs/toolkit";


// // using Anums 
// const STATUSES = Object.freeze({
//   IDLE: "idle",
//   ERROR: "error",
//   LOADING: "loading",
// });


// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     data: [],
//     status: STATUSES.IDLE,
//   },
//   reducers : {
//     setProduct (state ,action) {

//         // Do not call API inside Reducers because Reducers are Synchronous 

//         //  for API call we use MIDDLEWARE inside Reacrt-toolkit 
//         state.data = action.payload;
//     }
//   }
// });
