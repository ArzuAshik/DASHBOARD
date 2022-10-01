import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    isError: false,
    isConnected: false,
    connectedTo: null,
}


export const dbSlice = createSlice({
    name: "dbSlice",
    initialState,
    reducers: {
        dbConnectionSuccess: (state, action) => {
            const newState = {
                error: "",
                isError: false,
                isConnected: true,
                connectedTo: action.payload,
            }
            Object.assign(state, newState)
        },
        dbConnectionError: (state, action) => {
            const newState = {
                error: action.payload,
                isError: true,
                isConnected: false,
                connectedTo: null,
            }
            Object.assign(state, newState)
        },
        resetDB: (state) => {
            Object.assign(state, initialState)
        }
    }
})

export default dbSlice.reducer
export const { dbConnectionSuccess, dbConnectionError, resetDB } = dbSlice.actions