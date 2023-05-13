import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../redux/slices/ProductSlice'

const store= configureStore({
    reducer:{
        product: ProductReducer,
        
    }
}) 

export default store;
