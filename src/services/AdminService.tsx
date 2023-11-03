import $api from "../http";
import {AxiosResponse} from 'axios';
import { IProduct, IVacancy } from "../modelTypes/reponses";
import { newProducDataDto } from "../dtos/adminDtos";

export default class AdminService {
    static async getProducts(): Promise<AxiosResponse> {
        return $api.get<IProduct[]>('/products')
    }
    static async updateProduct(productID: string, newProductData: newProducDataDto): Promise<AxiosResponse> {
        return $api.post<AxiosResponse>('/admin/update/product', {productID, newProductData})
    }

    static async getVacancies(): Promise<AxiosResponse> {
        return $api.get<IVacancy[]>('/vacancies')
    }
}