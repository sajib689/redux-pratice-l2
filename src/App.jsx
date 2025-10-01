import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counter/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  }
  return (
    <div>
      <h1>Counter With Redux</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div className="div">{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>handleReset</button>
    </div>
  );
}
