import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import {
  deposit,
  withdraw,
  requestLoan,
} from "./features/account/accountSlice";
import { Provider } from "react-redux";

store.dispatch(deposit(5000));
store.dispatch(withdraw(2000));
store.dispatch(requestLoan(10000, "beli es teh"));
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
