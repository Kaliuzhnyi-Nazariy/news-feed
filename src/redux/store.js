import { configureStore } from "@reduxjs/toolkit";
import { newsSliceReducer } from "./news/newsSlice";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { weatherSliceReducer } from "./weather/weatherSlice";

export const store = configureStore({
  reducer: {
    news: newsSliceReducer,
    weather: weatherSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
