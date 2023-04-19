import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { conditionallyFieldsSlice } from "./conditionallyFieldsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    conditionallyFields: conditionallyFieldsSlice.reducer,
  },
});

export default store;
