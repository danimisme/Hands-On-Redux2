import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initialStateCounter, action) => {
//   switch (action.type) {
//     case "counter/increase":
//       return { ...state, counter: state.counter + action.payload };
//     case "counter/decrease":
//       return { ...state, counter: state.counter - action.payload };
//     case "counter/reset":
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// };

// export const increase = (num) => {
//   return {
//     type: "counter/increase",
//     payload: num,
//   };
// };

// export const decrease = (num) => {
//   return {
//     type: "counter/decrease",
//     payload: num,
//   };
// };

// export const reset = () => {
//   return {
//     type: "counter/reset",
//   };
// };

// export default counterReducer;
