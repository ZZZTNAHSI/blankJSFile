import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./cart-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id, price: newItem.price, quantity: 1, totalPriced: newItem.price, name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPriced = existingItem.totalPriced + newItem.price;
            }
        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPriced = existingItem.totalPriced - existingItem.price;
            }
        }
    }
});

export default cartSlice;
export const cartActions = cartSlice.actions;