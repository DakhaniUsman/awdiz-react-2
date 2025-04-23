import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            console.log(action, "action");
            if(action.payload ){
              localStorage.setItem("tokenFromBackend",JSON.stringify(action.payload.token));
              state.user = action.payload.userData;
            }

          },
          logout: (state) => {
            localStorage.removeItem("token");
            state.user = null;
            alert("Logout successfull.");
          },

    }
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;