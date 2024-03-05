import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from '../redux/slice'

const Store = configureStore({
    reducer:{
        reducer:ProductReducer
    }
})

export default Store