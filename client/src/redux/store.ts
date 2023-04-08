import { ThunkAction, configureStore, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
import { promises } from "dns";

const persistAuthConfig = {
  key: "auth",
  storage,
  whiteList: ["accesToken"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(persistAuthConfig, authReducer),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<Promise<unknown>, RootState, unknown, Action<unknown>>;

export const persistor = persistStore(store);

export default store;
