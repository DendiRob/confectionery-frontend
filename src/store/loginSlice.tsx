import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { AuthResponse, IUser } from "../modelTypes/reponses";
import axios from "axios";

type initialStateTypes = {
    isModalActive: boolean,
    isRegisterFormOpen:boolean,
    user: IUser,
    isAuth: boolean,

};

type loginTypes = {
    email: string,
    password: string,
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: loginTypes) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            return {user: response.data.user}
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
)

export const registration = createAsyncThunk(
    'auth/registration',
    async ({email, password}: loginTypes) => {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data)

            return {user: response.data.user}
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async () => {
        try {
            const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_BACK_URL}/refresh`, {withCredentials:true});
            localStorage.setItem('token', response.data.accessToken);
            return {user: response.data.user}
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
)

const initialState: initialStateTypes = {
    isModalActive: false,
    isRegisterFormOpen: false,
    user: {} as IUser ,
    isAuth: false,
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
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state , action) => {
            if (action.payload) {
                state.user = action.payload.user
                state.isAuth = true
              }
        })
        .addCase(registration.fulfilled, (state , action) => {
            if (action.payload) {
                state.user = action.payload.user;
                state.isAuth = true
              }
        })
        .addCase(logout.fulfilled, (state) => {
                state.isAuth = false
                state.user = {} as IUser;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload.user;
                state.isAuth = true
        }
    })
    }
})
export default LoginSlice.reducer;
export const { openLoginModal, closeLoginModal } = LoginSlice.actions;