import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../../redux/counterSlice";
import { toggle } from "../../redux/ThemeSlice";

const ReduxSliceCounter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const theme = useSelector((state) => state.theme.isLight);
  console.log("islight -",theme)
  const dispatch = useDispatch();

  function Increment() {
    dispatch(increment());
  }

  function Decrement() {
    if (count > 0) {
      dispatch(decrement());
    } else {
      alert("Counter cannot be less than 0");
      return count;
    }
  }

  function Reset() {
    dispatch(reset());
  }

  function ToggleTheme(){
    dispatch(toggle())
  }

  return (
    <div style={{
        width : "100%",
        minHeight : "100vh",
        backgroundColor : theme ? "white" : "#333"
    }}>
      <h1>Redux Slice Page</h1>

      <h2>Redux Slice Counter : {count}</h2>

      <button className="btn" onClick={Increment}>
        +
      </button>
      <button className="btn" onClick={Decrement}>
        -
      </button>
      <button className="btn" onClick={Reset}>
        Reset
      </button>

      <button className="btn" onClick={ToggleTheme}>{theme ?"🌙" : "☀️"}</button>
    </div>
  );
};
export default ReduxSliceCounter;
