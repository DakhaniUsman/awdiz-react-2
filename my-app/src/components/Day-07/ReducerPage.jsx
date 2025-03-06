import React, { useReducer } from 'react'

const Reducer = (state, action) => {
    console.log("state : ", state, "action : ", action);

    switch (action.type) {

        case "INCREMENT":
            return { ...state, counter: state.counter + 1 }
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 }

        case "RESET":
            return initialState;

        default:
            return state
    }
}
const initialState = { counter: 0, counter2: 100 }

const ReducerPage = () => {

    const [state, dispatch] = useReducer(Reducer, initialState)

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
            <h1>Reducer</h1>

            <h2>Counter : {state.counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default ReducerPage