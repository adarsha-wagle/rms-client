import { configureStore } from "@reduxjs/toolkit";

// import templateReducer from "./templateSlice";
import navReducer from "./navSlice";
import homeReducer from "./homeSlice";

import restaurantMenuReducer from "./restaurantMenuSlice";

import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
  reducer: {
    // template: templateReducer,
    nav: navReducer,
    restaurantMenu: restaurantMenuReducer,
    home: homeReducer,
    feedback: feedbackReducer,
  },
});
