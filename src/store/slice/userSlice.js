import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUserAction = createAsyncThunk(
  "createUserAction",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://app-manager-28ce3-default-rtdb.firebaseio.com/userData.json`,
        data
      );
      console.log("response", response.config.data);
      return response.config.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserAction = createAsyncThunk(
  "getUserAction",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://app-manager-28ce3-default-rtdb.firebaseio.com/userData.json`
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "userDataSlice",
  initialState: {
    getUsers: [],
    createUser: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: {
    [createUserAction.pending]: (state, action) => {
      state.loader = true;
    },
    [createUserAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.createUser = action.payload;
    },
    [createUserAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getUserAction.pending]: (state, action) => {
      state.loader = true;
    },
    [getUserAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.getUsers = action.payload;
    },
    [getUserAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
