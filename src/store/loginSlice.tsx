import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    isModalActive: boolean
};
const initialState = {
    isModalActive: false
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
        }
    },
})
export default LoginSlice.reducer;
export const { openLoginModal, closeLoginModal } = LoginSlice.actions;