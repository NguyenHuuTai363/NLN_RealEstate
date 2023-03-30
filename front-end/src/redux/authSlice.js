import { createSlice } from '@reduxjs/toolkit'

const authSlice =  createSlice({
    name: "auth",
    initialState:{
        login:{
            currentUser: null,
            isFetching: false,
            error: false
        },

        register:{
            isFetching: false,
            error: false,
            success: false
        },

        logout:{
            isFetching: false,
            error: false
        }
    },

    reducers:{
        // Login 
        loginStart: (state) => {
            state.login.isFetching = true;
        },

        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        // Register
        registerStart: (state) => {
            state.register.isFetching = true;
        },

        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },

        //Logout
        logout: (state) => {
            state.login.currentUser = null;
            state.login.isFetching = false;
            state.login.error = false;
            localStorage.setItem('user', null);
        },
    }
});

export const {loginStart, loginFailed, loginSuccess, registerStart, registerFailed, registerSuccess, logout } = authSlice.actions;

export default authSlice.reducer;