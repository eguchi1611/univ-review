import { configureStore } from "@reduxjs/toolkit";

import { sampleSlice } from "./sample-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sample: sampleSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
