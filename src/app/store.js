import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import iceCreamReducer from "../features/icecream/iceCreamSlice.js";
import careersReducer from "../features/career/careerSlice.js";
// import logger from "redux-logger";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        career: careersReducer,
    },
    // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger.default)
});

export default store;