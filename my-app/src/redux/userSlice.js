import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const UserSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            console.log(action, "action");
            console.log(action.payload,"action.payload")
            console.log(action.payload.userData,"action.payload.userData")
            if(action.payload?.token){
              localStorage.setItem("token",JSON.stringify(action.payload.token));
            }
            state.user = action.payload.userData;
            
          },
          logout: (state) => {
            localStorage.removeItem("token");
            state.user = null;
            toast.success("Logout successfull.");
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