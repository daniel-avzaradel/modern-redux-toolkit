import "./counter.css";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../assets/store/store";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<string | number>(0);

  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  };

  return (
    <div className="container">
      <h1>REDUX TOOLKIT TUTORIAL </h1>
      <br />
      <h3>COUNTER</h3>
      <br />
      <br />
      <div className="counter-display">
        <span>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </span>
      </div>
      <br />
      <div className="counter-display">
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          className="second-line"
        >
          Add Amount
        </button>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={resetAll} className="second-line">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
