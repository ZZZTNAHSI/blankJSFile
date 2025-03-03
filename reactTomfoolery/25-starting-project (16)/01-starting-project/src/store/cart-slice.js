import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,

            }
        }
    }
});

export default uiSlice;
export const uiActions = uiSlice.actions;

