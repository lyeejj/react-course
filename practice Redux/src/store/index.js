import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // merge 다중slice
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
