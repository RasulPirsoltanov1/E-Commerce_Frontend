import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";


const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail:null,
    productDetailStatus: STATUS.IDLE
}


export const getProducts = createAsyncThunk('getproducts', async (sort) => {
    const products = await fetch(`https://fakestoreapi.com/products?sort=${sort}`);
    let data = products.json();
    return data;
});

export const getDetailProduct = createAsyncThunk("getdetailproduct", async (id) => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = product.json();
    return data;
});

export const getProductsByCategory = createAsyncThunk("getProductsByCategory", async (category) => {
    const product = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    let data = product.json();
    return data;
});

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsByCategory.pending,(state,action)=>{
            state.productsStatus=STATUS.LOADING;
        });
        builder.addCase(getProductsByCategory.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.productsStatus=STATUS.SUCCESS;
        });
        builder.addCase(getProductsByCategory.rejected,(state,action)=>{
            state.productsStatus=STATUS.FAIL;
        })
        // getProducts
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload; // action.payload'ı state.products'e ata
        });
        // getDetailProduct
        builder.addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload; // action.payload'ı state.productDetail'e ata
        });

        builder.addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL;
        });
        builder.addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING;
        });
        builder.addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL;
        });
    }
});

export default productSlice.reducer












