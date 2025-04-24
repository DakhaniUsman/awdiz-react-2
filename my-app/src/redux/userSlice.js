import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name: "user",
    initialState: { user: null , token : null},
    reducers: {
        login: (state, action) => {
            console.log(action, "action");
            if(action.payload?.userData){
              localStorage.setItem("token",JSON.stringify(action.payload.token));
              state.user = action.payload.userData;
            }
            state.token = action.payload.token

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


// payload : {
//     "success": true,
//     "message": "Login Successfull!",
//     "userData": {
//         "name": "Awdiz",
//         "token": "abcde"
//     }
// }