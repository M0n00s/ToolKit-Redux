import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementby,
} from "./store/slices/counter/CounterSlice";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onIncrementby = () => {
    dispatch(incrementby(2));
  };

  return (
    <div className="App">
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrementby}>Increment by 2</button>
      </div>
    </div>
  );
};
