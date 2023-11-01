import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IProduct } from "../modelTypes/reponses";
import AdminService from "../services/AdminService";
import { newProducDataDto } from "../dtos/adminDtos";

type initialStateTypes = {
    products: IProduct[]
}
type productBody = {
    productID: string,
    newProductData: newProducDataDto //нужно добавить,что именно за объект и в бэке тоже
}

const initialState: initialStateTypes = {
    products: []
}

export const getProducts = createAsyncThunk(
    'admin/getProducts',
    async (_, {rejectWithValue}) => {
        try {
            const response = await AdminService.getProducts();
            return {products: response.data}
        } catch (err: any) {
            return rejectWithValue(err)
        }
    }
)

export const updateProduct = createAsyncThunk(
    'admin/updateProduct',
    async ({productID, newProductData}: productBody) => {
        await AdminService.updateProduct(productID, newProductData)
    }
)

const AdminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            if(action.payload){
                action.payload.products.map((item: IProduct) => state.products.push(item));
            }
        })
    },
})
export default AdminSlice.reducer;
// export const {

// } = AdminSlice.actions