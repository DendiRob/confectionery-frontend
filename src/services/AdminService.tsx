import $api from "../http";
import {AxiosResponse} from 'axios';
import { IProduct } from "../modelTypes/reponses";

export default class AdminService {
    static async getProducts(): Promise<AxiosResponse> {
        return $api.get<IProduct[]>('/products')
    }
}