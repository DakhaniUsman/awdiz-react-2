import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice.js'
import themeReducer from './ThemeSlice.js'


const store = configureStore({
    reducer : {
        counter : counterReducer,
        theme : themeReducer
    }
})

export default store;
