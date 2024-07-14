// store/FrameSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@/APIHelper/axios";

const FrameSlice = createSlice({
    name: "Frame",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchFrameStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchFrameSuccess(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        fetchFrameFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchFrameStart, fetchFrameSuccess, fetchFrameFailure } = FrameSlice.actions;

export const fetchFrameDetail = () => async (dispatch) => {
    dispatch(fetchFrameStart());
    try {
        // const response = await axiosInstance.get("/user/get-frame-details");
        // dispatch(fetchFrameSuccess(response.data.frame));
    } catch (error) {
        dispatch(fetchFrameFailure(error.message));
    }
};

export default FrameSlice.reducer;
