import { apiInstance } from "../AxiosBaseApi";

const ENDPOINTS = {
    all: '/good/',
    bbyId: '/good/'
};

export const getAllGoods = async (categoryId?: string) => {
    let URL = ENDPOINTS.all
    if (categoryId) {
        URL += `?category_id=${categoryId}`
    }
    return await apiInstance.get(URL)
}

export const getGoodById = async (goodId: number) => {
    let URL = ENDPOINTS.bbyId + goodId
    return await apiInstance.get(URL)
}