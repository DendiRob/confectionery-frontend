import $api from "../http";
import {AxiosResponse} from 'axios';
import { AuthResponse } from "../modelTypes/reponses";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return  $api.post('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return  $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void>{
        return  $api.post('/logout')
    }
}
