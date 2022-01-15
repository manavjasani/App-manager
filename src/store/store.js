import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import loginSlice from "./slice/loginSlice";
import appSlice from "./slice/appSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
    apps: appSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
