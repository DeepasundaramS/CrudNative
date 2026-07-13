import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    loginUser: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userInfo: (state, action) => {
            state.users = action.payload
        },
        admin: (state, action) => {
            state.loginUser = action.payload
        },
    },
});

export const { userInfo, admin } = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer