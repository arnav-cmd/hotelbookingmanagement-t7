import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "./BookSlice";

const store=configureStore({
    reducer:{
        book:BookReducer,
    },
})

export default store;