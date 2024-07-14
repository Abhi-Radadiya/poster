import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import frameReducer from "./detailsSlice";
import postersReducer from "./posterReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        frame: frameReducer,
        posters: postersReducer,
    },
});

export default store;
