import { ThunkAction, configureStore, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/auth";
import userSlice from "./slices/user";
import specialistsSlice from "./slices/specialists";
import specialitiesSlice from "./slices/specialities";

const persistAuthConfig = {
  key: "auth",
  storage,
  whiteList: ["accesToken"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authSlice>>(persistAuthConfig, authSlice),
    user: userSlice,
    specialists: specialistsSlice,
    specialities: specialitiesSlice,
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
