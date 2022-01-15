import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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

export const getAppAction = createAsyncThunk(
  "getAppAction",
  async (data, thunkAPI) => {
    const usersCollection = collection(db, "appData");
    try {
      const response = await getDocs(usersCollection);
      const resData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("getAppActionresponse", resData);
      return resData;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAppDetailAction = createAsyncThunk(
  "getAppDetailAction",
  async (id, thunkAPI) => {
    try {
      const docRef = doc(db, "appData", id);
      const docSnap = await getDoc(docRef);
      console.log("docSnap", docSnap.data());
      return docSnap.data();
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAppAction = createAsyncThunk(
  "updateAppAction",
  async (data, thunkAPI) => {
    try {
      const docRef = doc(db, "appData", data.id);
      const docSnap = await updateDoc(docRef, data.data);
      return docSnap.data;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const clearAppDetailAction = createAsyncThunk(
  "clearAppDetailAction",
  async (data, thunkAPI) => {
    return;
  }
);

const appSlice = createSlice({
  name: "appDataSlice",
  initialState: {
    createApp: null,
    getApps: [],
    appDetail: null,
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
    [getAppAction.pending]: (state, action) => {
      state.loader = true;
    },
    [getAppAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.getApps = action.payload;
    },
    [getAppAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getAppDetailAction.pending]: (state, action) => {
      state.loader = true;
    },
    [getAppDetailAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.appDetail = action.payload;
    },
    [getAppDetailAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [clearAppDetailAction.fulfilled]: (state, action) => {
      state.appDetail = null;
    },
  },
});

export default appSlice.reducer;
