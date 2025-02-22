import { useState } from "react";

const UseState = () => {

    const [counter, setCounter] = useState(0);

    const Increment = () => { setCounter((prevState) => prevState + 1) }
    const Decrement = () => {
        if (counter > 0) {
            setCounter((prevState) => prevState - 1)
        } else {
            alert("counter cannot be less than 0 ❌")

        }

    }
    const Reset = () => { setCounter(0) }

    return (
        <div>
            <h1>Use State Page </h1>

            <h1>Counter : {counter}</h1>
            <button className="btn" onClick={Increment}>+</button>
            <button className="btn" onClick={Decrement}>-</button>
            <button className="btn" onClick={Reset}>Reset</button>
        </div>
    )
}
export default UseState;