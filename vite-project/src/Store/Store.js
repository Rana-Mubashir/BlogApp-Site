import {configureStore } from '@reduxjs/toolkit'
import StoreSliceReducer from './StoreSlice'
const store =configureStore({
    reducer:{
       blog:StoreSliceReducer
    }
})
export default store