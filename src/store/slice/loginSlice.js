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

// export const authState = createAsyncThunk("authState", async () => {
//   const storedToken = localStorage.getItem("token");
//   const storedExpirationTime = localStorage.getItem("expirationDate");

//   return {
//     token: storedToken,
//     expireTime: storedExpirationTime,
//   };
// });

// export const authCheckState = createAsyncThunk("authCheckState", () => {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     // const id = localStorage.getItem("id");
//     if (!token) {
//       console.log("No token && no id");
//       // dispatch(userLogout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem("expirationDate"));
//       if (expirationDate.getTime() <= new Date().getTime()) {
//         console.log("logout1");
//         // dispatch(userLogout());
//       } else {
//         const userId = localStorage.getItem("id");
//         console.log(
//           ((expirationDate.getTime() - new Date().getTime()) / 1000) * 500
//         );
//         // dispatch({ type: USERS.LOGIN_SUCCESS, token: token, id: userId });
//         // dispatch(
//         //   checkAuthTimeout(
//         //     ((expirationDate.getTime() - new Date().getTime()) / 1000) * 500
//         //   )
//         // );
//       }
//     }
//   };
// });

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
