// store/postersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/APIHelper/axios";

export const fetchPosters = createAsyncThunk("posters/fetchPosters", async () => {
    const response = await axiosInstance.get("/posters");
    return response.data;
});

const postersSlice = createSlice({
    name: "posters",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosters.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPosters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postersSlice.reducer;
