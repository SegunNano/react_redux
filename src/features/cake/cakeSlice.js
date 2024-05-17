import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cakeNum: 14
};

export const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.cakeNum -= action.payload;
        },
        restocked: (state, action) => {
            state.cakeNum += action.payload;
        }
    }
});
export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;