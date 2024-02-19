import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
