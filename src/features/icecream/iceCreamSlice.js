import { createSlice } from "@reduxjs/toolkit";
import cakeReducer from "../cake/cakeSlice.js";
import { ordered as cakeOrdered } from '../cake/cakeSlice.js';


const initialState = {
    iceCreamNum: 21,
};

export const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.iceCreamNum -= action.payload;
        },
        restocked: (state, action) => {
            state.iceCreamNum += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase('cake/ordered', state => {
            state.iceCreamNum--;
        });
    }
    // extraReducers: builder => {
    //     builder.addCase(cakeOrdered, (state) => {
    //         state.iceCreamNum--;
    //     });
    // }
});
export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;