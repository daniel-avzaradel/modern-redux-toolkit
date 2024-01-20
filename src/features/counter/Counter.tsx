import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { RootState } from "../../store/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

    return <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
  </section>
};

export default Counter;
