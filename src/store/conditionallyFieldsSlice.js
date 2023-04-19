import { createSlice, current } from "@reduxjs/toolkit";

export const conditionallyFieldsSlice = createSlice({
  name: "conditionallyFields",
  initialState: {
    selectedDish: "",
    rangeLabel: 0,
  },
  reducers: {
    selectDish(state, action) {
      state.selectedDish = action.payload;
    },

    setRangeLabel(state, action) {
      state.rangeLabel = action.payload;
    },

    // resetForm(state) {
    //   state.selectedDish = "";
    //   state.rangeLabel = 0;
    // },
  },
});

export const conditionallyFieldsActions = conditionallyFieldsSlice.actions;
