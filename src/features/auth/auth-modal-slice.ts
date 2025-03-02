import { createSlice } from "@reduxjs/toolkit";

interface AuthModalState {
  open: boolean;
}

const initialState: AuthModalState = {
  open: false,
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
  },
});

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;

export default authModalSlice.reducer;
