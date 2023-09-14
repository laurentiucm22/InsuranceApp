import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const offersCreatedSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCountOffers(state) {
      state.count += 1;
    },
  },
});

export const { incrementCountOffers } = offersCreatedSlice.actions;

export default offersCreatedSlice.reducer;
