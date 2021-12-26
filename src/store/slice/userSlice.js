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
      console.log("createUserActionresponse", response);
      return response.config.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserAction = createAsyncThunk(
  "updateUserAction",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://app-manager-28ce3-default-rtdb.firebaseio.com/userData/${data.id}.json`,
        data.data
      );
      console.log("updateUserActionresponse", response);
      return response.data;
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
      console.log("getUserActionresponse", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserDetail = createAsyncThunk(
  "getUserDetail",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://app-manager-28ce3-default-rtdb.firebaseio.com/userData/${id}.json`
      );
      console.log("getUserDetailresponse", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const clearUser = createAsyncThunk("clearUser", async (id, thunkAPI) => {
  return;
});

const userSlice = createSlice({
  name: "userDataSlice",
  initialState: {
    getUsers: [],
    userDetail: null,
    createUser: null,
    updateUser: null,
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
    [updateUserAction.pending]: (state, action) => {
      state.loader = true;
    },
    [updateUserAction.fulfilled]: (state, action) => {
      state.updateUser = false;
      state.createUser = action.payload;
    },
    [updateUserAction.rejected]: (state, action) => {
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
    [getUserDetail.pending]: (state, action) => {
      state.loader = true;
    },
    [getUserDetail.fulfilled]: (state, action) => {
      state.loader = false;
      state.userDetail = action.payload;
    },
    [getUserDetail.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [clearUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.createUser = null;
      state.updateUser = null;
      state.userDetail = null;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
