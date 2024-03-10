import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./features/account/accountSlice";
import { increase, decrease, reset } from "./features/counter/counterSlice";
import {
  createCustomer,
  updateFullname,
} from "./features/customer/customerSlice";

function App() {
  const account = useSelector((state) => state.account);
  const counter = useSelector((state) => state.counter);
  const customer = useSelector((state) => state.customer);
  console.log(customer);
  const dispatch = useDispatch();

  const updateFullnameHandler = () => {
    const fullname = prompt("Enter your fullname");
    console.log(fullname);
    dispatch(updateFullname({ fullname }));
  };

  const createCustomerHandler = () => {
    const fullname = prompt("Enter your fullname");
    const nationalId = prompt("Enter your nationalId");
    dispatch(createCustomer(fullname, nationalId));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{account.balance}</p>
        <button onClick={() => dispatch(deposit(5000))}>Add 5000</button>
        <p>Counter {counter.counter}</p>
        <div className="button-container">
          <button onClick={() => dispatch(increase(1))}>increase</button>
          <button onClick={() => dispatch(decrease(1))}>decrease</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
        <h2>Customer</h2>
        <div>
          <button onClick={createCustomerHandler}>Create Customer</button>
          <button onClick={updateFullnameHandler}>Update Fullname</button>
        </div>
        <p>fullname: {customer.fullname}</p>
        <p>nationalId: {customer.nationalId}</p>
        <p>createAt: {customer.createAt}</p>
      </header>
    </div>
  );
}

export default App;
