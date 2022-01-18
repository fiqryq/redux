import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "TAMBAH" })}>+</button>
      <button onClick={() => dispatch({ type: "KURANG" })}>-</button>
    </div>
  );
}
