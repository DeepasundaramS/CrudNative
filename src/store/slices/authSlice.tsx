import { createSlice } from "@reduxjs/toolkit";
import { Storage } from "../../util/storage";

const SignupedUser = Storage.getItem("SignupedUser")
const LoginedUser = Storage.getItem("loginedUser")
const isauthenticate = Storage.getItem("isAuthenticated")

const initialState = {
    users: SignupedUser || [],
    loginUser: LoginedUser || {},
    isAuthenticated: isauthenticate || false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userInfo: (state, action) => {
            state.users = action.payload
            Storage.setItem("SignupedUser", action.payload)
        },
        adminUser: (state, action) => {
            state.loginUser = action.payload
            Storage.setItem("loginedUser", action.payload)
        },
        isAuth: (state, action) => {
            state.isAuthenticated = action.payload
            Storage.setItem("isAuthenticated", action.payload)
        },
        logout: (state, action) => {
            state.isAuthenticated = action.payload
            Storage.removeItem("isAuthenticated")
            Storage.removeItem("loginedUser")
        }
    },
});

export const { userInfo, adminUser, isAuth, logout } = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer