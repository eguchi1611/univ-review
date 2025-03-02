import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface AuthModalState {
  open: boolean;
  type: "signin" | "signup";
}

const initialState: AuthModalState = {
  open: false,
  type: "signin",
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.open = true;
    },
    closeAuthModal: (state) => {
      state.open = false;
    },
    toggleAuthModal: (state) => {
      state.open = !state.open;
    },
    setAuthModalType: (
      state,
      action: PayloadAction<AuthModalState["type"]>,
    ) => {
      state.type = action.payload;
    },
  },
});

export const { openAuthModal, closeAuthModal, setAuthModalType } =
  authModalSlice.actions;

export default authModalSlice.reducer;
