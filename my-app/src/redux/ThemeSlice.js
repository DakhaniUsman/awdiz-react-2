import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name : "theme",
    initialState : {isLight : true},
    reducers : {
        toggle : (state)=> {
            state.isLight =  !state.isLight
        }
    }
})


export const { toggle } = ThemeSlice.actions;

export default ThemeSlice.reducer;