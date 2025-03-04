import { useReducer } from "react";

const UseReducer = () => {

    const initialState = { counter: 1 }

    const Reducer = (state,action) => {

        switch (action.type) {

            case 'INCREMENT':
                return ({...state.counter,[state.counter] : state.counter  + 1})
            case 'DECREMENT':
            case 'RESET':
        }


    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    const Increment = () => {
        dispatch({ type: "INCREMENT" })
    }

    const Decrement = () => {
        dispatch({ type: "DECREMENT" })

    }

    const Reset = () => {
        dispatch({ type: "RESET" })

    }

    return (
        <div>
            <h1>Use Reducer Counter</h1>

            <h2>Counter : {state.counter}</h2>
            <button className="btn" onClick={Increment}>+</button>
            <button className="btn" onClick={Decrement}>-</button>
            <button className="btn" onClick={Reset}>Reset</button>
        </div>
    )
}

export default UseReducer;
