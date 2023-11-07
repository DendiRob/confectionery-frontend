import $api from "../http";
import {AxiosResponse} from 'axios';
import { IProduct, IVacancy } from "../modelTypes/reponses";
import { newProductDataDto, newVacancyDataDto } from "../dtos/adminDtos";

export default class AdminService {
    static async getProducts(): Promise<AxiosResponse> {
        return $api.get<IProduct[]>('/products')
    }
    static async updateProduct(productID: string, newProductData: newProductDataDto): Promise<AxiosResponse> {
        return $api.post<AxiosResponse>('/admin/update/product', {productID, newProductData})
    }

    static async getVacancies(): Promise<AxiosResponse> {
        return $api.get<IVacancy[]>('/vacancies')
    }
    //с типами разобраться
    static async updateVacancy(_id: string, newVacancyData: newVacancyDataDto): Promise<AxiosResponse> {
        return $api.post<AxiosResponse>('/admin/update/vacancy', {_id, newVacancyData})
    }
    static async addVacancy(newVacancy: object): Promise<AxiosResponse> {
        return $api.post<AxiosResponse>('/admin/add/vacancy', {newVacancy})
    }
}