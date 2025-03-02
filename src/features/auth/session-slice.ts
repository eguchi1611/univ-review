import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Session } from "@supabase/supabase-js";

interface SessionState {
  session: Session | null | "loading";
}

const initialState: SessionState = {
  session: "loading",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState["session"]>) => {
      state.session = action.payload;
    },
  },
});

export const { setSession } = sessionSlice.actions;

export default sessionSlice.reducer;
