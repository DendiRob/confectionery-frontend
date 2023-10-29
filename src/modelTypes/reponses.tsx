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