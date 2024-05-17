import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading: false,
    careers: [],
    error: ''
};

export const fetchCareer = createAsyncThunk('career/fetchCareer', () => {
    return axios
        .get('http://localhost:3000/careers')
        .then(res => res.data);
});

const careerSlice = createSlice({
    name: 'career',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCareer.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCareer.fulfilled, (state, action) => {
                state.loading = false;
                state.careers = action.payload;
            })
            .addCase(fetchCareer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default careerSlice.reducer;