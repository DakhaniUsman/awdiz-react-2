import { createContext, useReducer } from "react";

export const MyCounterContext = createContext();

const Reducer = (state,action) => {

    switch (action.type) {
        case "INCREMENT" :
            return {...state, counter : state.counter + 1}
        case "DECREMENT" :
           if (state.counter > 0){
            return {...state, counter : state.counter - 1}
           } else {
            alert("COunter cannot be les than 0");
            return state;
           }
        case "RESET" :
            return {...state, counter : 0}
        default :
            return state;
    }

}

const initialState = { counter : 0}


const CounterContextProvider = ({children}) =>{

    const [state,dispatch] = useReducer(Reducer,initialState);

    return (
        <MyCounterContext.Provider value={{state : state, dispatch}}>
            {children}
        </MyCounterContext.Provider>
    )
}

export default CounterContextProvider;