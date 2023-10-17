import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productType } from "../modelTypes/catalogTypes";

const backendApi = process.env.REACT_APP_BACK_URL;

type initialStateTypes = {
    dataCatalog: productType[],
    isLoading: boolean,
    catalogError: unknown,
    skip: number,
    sumOfProducts: null | number
}



export const fetchProducts = createAsyncThunk(
    'catalogState/fetchProducts',
    async function(skip: number = 0,{rejectWithValue}) {

        try {
            const response = await fetch(`${backendApi}/products/catalog?skip=${skip}`);

            if(!response.ok ){
                throw new Error('Server is broken')
            }
            const data = response.json();

            return data
        } catch (error: unknown) {
            if(error instanceof Error){
                rejectWithValue(error.message)
            }
        }
        
    }
)
export const fetchSumProducts = createAsyncThunk(
    'catalogState/fetchSumProducts',
    async function(_,{rejectWithValue}) {

        try {
            const responseSum = await fetch(`${backendApi}/products/sum`);
            if(!responseSum.ok ){
                throw new Error('Server is broken')
            }
            const sum = responseSum.json();

            return sum
            
        } catch (error) {
                if(error instanceof Error){
                    rejectWithValue(error.message)
                }

        }
        
    }
)
const initialState: initialStateTypes= {
    dataCatalog: [],
    isLoading: false,
    catalogError: null,
    skip: 0,
    sumOfProducts: null
}


const CatalogSlice = createSlice({
    name: 'catalogState',
    initialState,
    reducers: {
        loadNextProducts(state) {
            state.skip += 15;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<productType[]>) => {
            action.payload.map((item) => state.dataCatalog.push(item));
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.catalogError = true;
        })
        .addCase(fetchSumProducts.fulfilled, (state, action: PayloadAction<number>) => {
            state.sumOfProducts = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchSumProducts.rejected, (state) => {
            state.isLoading = false;
            state.catalogError = true;
        })
    }

})
export default CatalogSlice.reducer;
export const { loadNextProducts } = CatalogSlice.actions;