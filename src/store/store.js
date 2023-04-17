// import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";

// const reducer = combineReducers({
//     form: formReducer
//   });

//   export default store;

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
