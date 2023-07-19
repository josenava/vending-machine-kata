import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
  id: "",
  name: "",
  balance: 0.0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.balance = action.payload.balance;
    },
    endSession: (state) => {
      return initialState;
      // state.id = initialState.id;
      // state.name = initialState.name;
      // state.balance = initialState.balance;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
  },
});

export const { startSession, endSession, setBalance } = userSlice.actions;

export default userSlice.reducer;
