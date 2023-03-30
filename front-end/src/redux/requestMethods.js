import axios from "axios";

import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

// API Login
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
}

// API Register
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:5000/api/auth/register", user);
        dispatch(registerSuccess());
        navigate("/Login");
    } catch(err) {
        dispatch(registerFailed());
    }
}


export const getAllUsers = async (accsessToken, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("http://localhost:5000/api/users", {
            headers: {token: `Bearer ${accsessToken}`},
        });
        dispatch(getUsersSuccess(res.data));
    } catch(err) {
        dispatch(getUsersFailed());
    }
}