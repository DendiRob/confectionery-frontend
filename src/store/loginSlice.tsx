import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    isModalActive: boolean,
    isRegisterFormOpen:boolean,
};
const initialState: initialStateTypes = {
    isModalActive: false,
    isRegisterFormOpen: false,
}


const LoginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        openLoginModal(state) {
            state.isModalActive = true
        },
        closeLoginModal(state) {
            state.isModalActive = false
        },
    },
})
export default LoginSlice.reducer;
export const { openLoginModal, closeLoginModal } = LoginSlice.actions;