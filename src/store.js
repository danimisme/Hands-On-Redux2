// import { createStore } from "redux";
// import accountReducer from "./features/account/accountSlice";
// import costumerReducer from "./features/customer/customerSlice";
// import counterReducer from "./features/counter/counterSlice";
// import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = configureStore({
//   account: accountReducer,
//   customer: costumerReducer,
//   counter: counterReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import costumerReducer from "./features/customer/customerSlice";
import counterReducer from "./features/counter/counterSlice";

const rootReducer = {
  account: accountReducer,
  customer: costumerReducer,
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
