import { configureStore } from "@reduxjs/toolkit";

import authModalReducer from "../features/auth/auth-modal-slice";
import sessionReducer from "../features/auth/session-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authModal: authModalReducer,
      session: sessionReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
