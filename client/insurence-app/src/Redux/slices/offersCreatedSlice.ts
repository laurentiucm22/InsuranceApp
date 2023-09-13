import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const offersCreatedSlice = createSlice({
  name: "offers-created",
  initialState,
  reducers: {
    countOffersCreated(state) {
      state.count = state.count + 1;
    },
  },
});

export const { countOffersCreated } = offersCreatedSlice.actions;
export default offersCreatedSlice.reducer;
