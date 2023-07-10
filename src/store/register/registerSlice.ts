import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisterFormState {
    userName: string,
    email: string,
    password: string,
}

export interface RegisterState {
    isFetching: boolean;
    success: boolean; 
    error: boolean; 
}

const initialState: RegisterState = {
    isFetching: false, 
    success: false, 
    error: false, 
}

const registerSlice = createSlice({
    name: "register", 
    initialState, 
    reducers: {
        registerStart: (state, action: PayloadAction<RegisterFormState>) => {
            state.isFetching = true; 
        }, 
        registerSuccess: (state) => {
            state.isFetching = false; 
            state.success = true; 
        }, 
        registerFailed: (state) => {
            state.error = true; 
        }
    }
})

// EXPORT REDUCER
const registerReducer = registerSlice.reducer; 
export default registerReducer; 

// EXPORT ACTIONS
export const { registerStart, registerSuccess, registerFailed } = registerSlice.actions; 










