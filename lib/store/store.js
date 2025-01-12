import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice"; // Path to your authSlice
import { cateReducer } from "./features/category/categorySlice";

export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer, // Make sure authReducer is correctly referenced
      category: cateReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: true,
  });
};
