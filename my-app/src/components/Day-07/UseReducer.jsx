import { useReducer } from "react";

const initialState = { counter: 1, counter2: 100 }

const Reducer = (state, action) => {

    console.log(state, "state", action, "action");

    switch (action.type) {

        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            if (state.counter > 0) {
                return { ...state, counter: state.counter - 1 }
            } else {
                alert("Counter cannot be less than 0")
                return state;
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }


}

const UseReducer = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state)

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


// useReducer is a hook in react that is used to add a reducer in react component
// it is used to manage complex state logic through reducer function
// Reducer returns updated state on the basis on action performed
// It takes two values Reducer function and initial state object
// it provides two things state and dispatch
// state stores the object given in initial state
// dispatch is used to call the reducer funciton
// we use dispatch to send the type of feature in the reducer
// the reducer has two props state, action
// state is the same as initial state and it gets the initial state object by default
// action prop takes the value sent through dispatch
// now according to the value sent through dispatch krdo in the action an object will be stored in action and through switch case wwe case perform the required task
