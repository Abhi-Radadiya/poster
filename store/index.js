import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import frameReducer from "./detailsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        frame: frameReducer,
    },
});

export default store;
