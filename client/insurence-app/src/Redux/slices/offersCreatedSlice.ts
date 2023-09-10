import { createSlice } from "@reduxjs/toolkit";

const offersCreatedSlice = createSlice({
  name: "offers-created",
  initialState: 0,
  reducers: {
    countOffersCreated: state => state + 1,
  },
});

export const { countOffersCreated } = offersCreatedSlice.actions;
export default offersCreatedSlice.reducer;
