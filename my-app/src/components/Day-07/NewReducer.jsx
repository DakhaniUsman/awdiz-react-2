import React, { useReducer } from 'react'

const Reducer = (state, action) => {
    console.log(state, "state", action, "action");

        switch (action.type) {
            case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
            case "DECREMENT":
            if (state.counter > 0) {
                return { ...state, counter: state.counter - 1 }
            } else {
                alert("Counter cannot be less than 0")
                return state;
            }
            case "RESET":
            return initialState;
            default:
            return state;
        }
}

const initialState = { counter: 0, counter1: 100 }

const NewReducer = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state);

    const Increment = () => {
        dispatch({ type: "INCREMENT" });
    }
    const Decrement = () => {
        dispatch({ type: "DECREMENT" });

    }
    const Reset = () => {
        dispatch({ type: "RESET" });

    }

    return (
        <div>
            <h1>New Reducer Page</h1>
            <h2>Counter : {state.counter}</h2>

            <button onClick={Increment} className='btn'>+</button>
            <button onClick={Decrement} className='btn'>-</button>
            <button onClick={Reset} className='btn'>Reset</button>

        </div>
    )
}

export default NewReducer