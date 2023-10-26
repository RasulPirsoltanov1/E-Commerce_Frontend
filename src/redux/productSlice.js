import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";


const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}


export const getProducts = createAsyncThunk('getproducts', async () => {
    const products = await fetch('https://fakestoreapi.com/products');
    let data = products.json();
    return data;
})

export const getDetailProduct = createAsyncThunk("getdetailproduct", async (id) => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = product.json();
    return data;
})

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
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












