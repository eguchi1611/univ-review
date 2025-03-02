import { configureStore } from "@reduxjs/toolkit";

import authModalReducer from "../features/auth/auth-modal-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authModal: authModalReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
