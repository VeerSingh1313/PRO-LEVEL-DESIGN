import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Products = createAsyncThunk("products", async (payload) => {
    const responce = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${payload?.pageNo}&limit=${payload?.pageSize}`)
    return responce.data
})
export const fetchMoreProducts = createAsyncThunk("fetchMoreProducts", async (payload) => {
    const responce = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${payload?.pageNo}&limit=${payload?.pageSize}`)
    return responce.data
})
