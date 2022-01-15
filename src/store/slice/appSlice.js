import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebaseConfig";

export const createAppAction = createAsyncThunk(
  "createAppAction",
  async (data, thunkAPI) => {
    try {
      const collectionApps = collection(db, "appData");
      const response = await addDoc(collectionApps, data);
      console.log("responseApps", response);
      return response;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const appIconUploadAction = createAsyncThunk(
  "appIconUploadAction",
  (data, thunkAPI) => {
    try {
      const storageRef = ref(storage, `/application/${data.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, data.image);
      const imageUpload = uploadTask.on(
        "state_changed",
        console.log("res"),
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((res) => {
            if (data.cb) {
              return data.cb(null, res);
            }
          });
        }
      );
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const appSlice = createSlice({
  name: "appDataSlice",
  initialState: {
    createApp: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: {
    [createAppAction.pending]: (state, action) => {
      state.loader = true;
    },
    [createAppAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.createApp = action.payload;
    },
    [createAppAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default appSlice.reducer;
