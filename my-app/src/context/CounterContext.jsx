import { createContext, useReducer } from "react";

export const MyCounterContext = createContext();

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            if (state.counter > 0) {
                return { ...state, counter: state.counter - 1 }
            } else {
                alert("Counter cannot be les than 0");
                return state;
            }
        case "RESET":
            return { ...state, counter: 0 };
        case "TOGGLE_THEME":
            return { ...state, isLight: !state.isLight };
        default:
            return state;

    }

}

const initialState = { counter: 0, isLight: true }


// Higher Order Component -> takes a component as a prop

const CounterContextProvider = ({ children }) => { // here app component is called

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <MyCounterContext.Provider value={{ state: state, dispatch }}>
            {children}
        </MyCounterContext.Provider>
    )
}

export default CounterContextProvider;