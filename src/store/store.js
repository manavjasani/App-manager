import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import loginSlice from "./slice/loginSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
