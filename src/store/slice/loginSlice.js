import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "loginAction",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgyAy8iNEtI97kUsE05-JkzFPng1Zw3TE",
        data
      );
      console.log("response", response.data);
      localStorage.setItem("token", response.data.refreshToken);
      localStorage.setItem("id", response.data.idToken);
      localStorage.setItem("expirationDate", response.data.expiresIn);
      return response.data;
    } catch (err) {
      console.log("err", err.response);
      thunkAPI.rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isUser: false,
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.loader = true;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.isUser = true;
    },
    [loginAction.rejected]: (state, action) => {
      state.isUser = false;
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
