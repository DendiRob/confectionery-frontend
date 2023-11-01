import {AxiosResponse} from 'axios';

export interface IUser {
    email: string,
    isAcivated: boolean,
    id: string,
    role: string
}
export interface AuthResponse extends AxiosResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}

export interface IProduct {
    title: string,
    proteins: number,
    fats: number,
    carbohydrates: number,
    photoPath: string,
    productID: string,
    energy: number,
    expiration: number,
    price: number,
    composition: string,
    box_weight: number,
    isActive: boolean
}