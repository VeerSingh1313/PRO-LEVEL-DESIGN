import { createSlice } from "@reduxjs/toolkit";
import { Products, fetchMoreProducts } from "./action";

const Product = createSlice({
    name: "data",
    initialState: {
        Product: [],
        pages: [],

        currentPageSize: 1
    },
    extraReducers: ((builder) => {
        builder.addCase(Products.pending, (state) => {
            state.isloading = true;
            state.isError = false;
        })
        builder.addCase(Products.fulfilled, (state, action) => {
            state.isloading = false;
            state.Product = action.payload;
            state.isError = false;
        })
        builder.addCase(Products.rejected, (state) => {
            state.isloading = false;
            state.isError = true;
        })
        //for pagenation
        builder.addCase(fetchMoreProducts.pending, (state) => {
            state.isloading = true;
            state.isError = false;
        })
        builder.addCase(fetchMoreProducts.fulfilled, (state, action) => {
            state.isloading = false;
            state.Product = [...state.Product, ...action.payload];
            state.isError = false;
        })
        builder.addCase(fetchMoreProducts.rejected, (state) => {
            state.isloading = false;
            state.isError = true;
        })

    }),

})

export default Product.reducer