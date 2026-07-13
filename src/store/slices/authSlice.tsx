import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {},
    loginUser: {},
    userdetails: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload
        },
        login: (state, action) => {
            state.loginUser = action.payload
        },
        userinfo: (state, action) => {
            state.userdetails = action.payload
        }
    },
});

export const { register, login, userinfo } = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer