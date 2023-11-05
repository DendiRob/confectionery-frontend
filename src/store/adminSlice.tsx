import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, IVacancy } from "../modelTypes/reponses";
import AdminService from "../services/AdminService";
import { newProductDataDto, newVacancyDataDto } from "../dtos/adminDtos";
import { vacancyInfoType } from "../modelTypes/vacancyTypes";

type initialStateTypes = {
    products: IProduct[],
    vacancies: IVacancy[],
    isVacancyModalOpen: boolean,
    isCatalogModalOpen: boolean,
    changingVacancy: vacancyInfoType

}
type productBody = {
    productID: string,
    newProductData: newProductDataDto //нужно добавить,что именно за объект и в бэке тоже
}
type vacancyBody = {
    _id: string,
    newVacancyData: newVacancyDataDto //нужно добавить,что именно за объект и в бэке тоже
}


const initialState: initialStateTypes = {
    products: [],
    vacancies: [],
    isVacancyModalOpen: false,
    isCatalogModalOpen: true,
    changingVacancy: {} as vacancyInfoType
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

export const getVacancies = createAsyncThunk(
    'admin/getVacancies',
    async (_, {rejectWithValue}) => {
        try {
            const response = await AdminService.getVacancies();
            return {vacancies: response.data}
        } catch (err: any) {
            return rejectWithValue(err)
        }
    }
)
//обработать ошибки надо
export const updateVacancy = createAsyncThunk(
    'admin/updateVacancy',
    async ({_id, newVacancyData}: vacancyBody) => {
        await AdminService.updateVacancy(_id, newVacancyData)
    }
)



const AdminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        closeVacancyModal(state) {
            state.isVacancyModalOpen = false;
        },
        openVacancyModal(state) {
            state.isVacancyModalOpen = true;
        },
        onChangeVacancy(state, action) {
            state.changingVacancy = action.payload;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            if(action.payload){
                action.payload.products.map((item: IProduct) => state.products.push(item));
            }
        })
        .addCase(getVacancies.fulfilled, (state, action) => {
            if(action.payload){
                action.payload.vacancies.map((item: IVacancy) => state.vacancies.push(item));
            }
        })
    },
})
export default AdminSlice.reducer;
export const {
    closeVacancyModal,
    openVacancyModal,
    onChangeVacancy
} = AdminSlice.actions