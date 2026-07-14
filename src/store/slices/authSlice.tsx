import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loginUser: {},
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userInfo: (state, action) => {
            state.users = action.payload
        },
        adminUser: (state, action) => {
            state.loginUser = action.payload
        },
        isAuth: (state, action) => {
            state.isAuthenticated = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.loginUser = {}
        }
    },
});

export const { userInfo, adminUser, isAuth, logout } = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer