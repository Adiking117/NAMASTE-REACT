import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import { useReducer } from "react";

const appStore = configureStore({
    reducer:{
        cart : cartReducer,
        // user : userReducer
    }
});

export default appStore;
