import { createSlice } from "@reduxjs/toolkit";
import { userDataTypes } from "../../components/CreateOffer/CreateOfferForm";

const offerFormDataSlice = createSlice({
  name: "offers-table",
  initialState: { items: [] as userDataTypes[] },
  reducers: {
    getFormData(state) {
      const formData = localStorage.getItem("formData");
      if (formData !== null) {
        const parseData = JSON.parse(formData);
        console.log(parseData);
        state.items.push(parseData);
      }
    },
  },
});

export const { getFormData } = offerFormDataSlice.actions;
export default offerFormDataSlice.reducer;
