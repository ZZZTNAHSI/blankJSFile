import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./cart-slice";
import cartSlice from "./ui-slice";

const store  = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer

    }
});

export default store;