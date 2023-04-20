import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const conditionallyFieldsActions = conditionallyFieldsSlice.actions;
