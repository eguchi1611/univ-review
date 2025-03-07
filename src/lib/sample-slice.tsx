import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface SampleState {
  one: string;
}

const initialState: SampleState = {
  one: "one",
};

export const sampleSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setOne: (state, action: PayloadAction<string>) => {
      state.one = action.payload;
    },
  },
});

export const { setOne } = sampleSlice.actions;

export default sampleSlice.reducer;
