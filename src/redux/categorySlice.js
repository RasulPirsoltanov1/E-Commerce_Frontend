import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const getCategories = createAsyncThunk('category', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = response.json();
    return data;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
        builder.addCase(getCategories.pending,(act,sta)=>{
            console.log("pending ...")
        })
        builder.addCase(getCategories.rejected,(act,sta)=>{
            console.log("rejected...")
        })
    }
})


export default categorySlice.reducer