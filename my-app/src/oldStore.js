import { createStore } from "redux";

const initialState = { counter : 0 , isLight : true}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            if (state.counter > 0){
                return { ...state, counter: state.counter - 1 }
            } else {
                alert("Counter cannot be less than 0");
                return state;
            }
        case "RESET":
            return { ...state,counter : 0};
        case "TOGGLE_THEME" :
            return {...state, isLight : !state.isLight};
        default :
        return state;
    }
}


const oldStore = createStore(Reducer);
export default oldStore;