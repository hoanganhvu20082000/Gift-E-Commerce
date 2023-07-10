import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DataLoginResponse {
  _id: string;
  userName: string;
  email: string;
  admin: boolean;
  accessToken: string;
  refreshToken: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  isFetching: boolean;
  token?: any;
  error: boolean;
  allUsers?: [];
}

export interface LoginState {
  userName: string;
  password: string;
}

const initialState: AuthState = {
  isFetching: false,
  token: null,
  error: false,
  allUsers: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state, action: PayloadAction<LoginState>) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.token = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.isFetching = false;
      state.token = null;
      state.error = false;
    },
    logOutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getAllUserStart: (state) => {
      state.isFetching = true;
    },
    getAllUserSuccess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.allUsers = action.payload;
    },
    getAllUserFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// EXPORT ACTIONS
export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  getAllUserStart,
  getAllUserSuccess,
  getAllUserFailed,
} = authSlice.actions;

// EXPORT REDUCER
const authReducer = authSlice.reducer;
export default authReducer;

// SELECTOR
export const token = (state: RootState) => state.auth.token;
export const userSelector = (state: RootState) => state.auth.allUsers;
