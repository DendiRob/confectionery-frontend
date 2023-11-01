import $api from "../http";
import {AxiosResponse} from 'axios';
import { IProduct } from "../modelTypes/reponses";
import { newProducDataDto } from "../dtos/adminDtos";

export default class AdminService {
    static async getProducts(): Promise<AxiosResponse> {
        return $api.get<IProduct[]>('/products')
    }
    //типизируй объект
    static async updateProduct(productID: string, newProductData: newProducDataDto): Promise<AxiosResponse> {
        return $api.post<AxiosResponse>('/admin/update/product', {productID, newProductData})
    }
}