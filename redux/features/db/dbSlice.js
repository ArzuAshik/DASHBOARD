import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    loading: false,
    isError: false,
    isConnected: false,
    connectedTo: null,
}


export const dbSlice = createSlice({
    name: "dbSlice",
    initialState,
    reducers: {
        connectingToDB: (state, action) => {
            const newState = {
                error: "",
                isError: false,
                loading: true,
                isConnected: false,

                // if you want to reset uncomment next line
                // connectedTo: null,
            }
            Object.assign(state, newState)
        },
        dbConnectionSuccess: (state, action) => {
            const newState = {
                error: "",
                isError: false,
                loading: false,
                isConnected: true,
                connectedTo: action.payload,
            }
            Object.assign(state, newState)
        },
        dbConnectionError: (state, action) => {
            const newState = {
                error: action.payload,
                isError: true,
                loading: false,
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