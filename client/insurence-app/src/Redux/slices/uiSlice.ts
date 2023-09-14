import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isUserValid: boolean;
}

const initialState: UiState = {
  isUserValid: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    validUser(state, action) {
      state.isUserValid = action.payload;
    },
  },
});

export const { validUser } = uiSlice.actions;
export default uiSlice.reducer;
