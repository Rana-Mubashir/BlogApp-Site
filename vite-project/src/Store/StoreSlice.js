import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated: false
}
const StoreSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            console.log("i am in auth function")
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})
export const { setAuthenticated } = StoreSlice.actions
export default StoreSlice.reducer