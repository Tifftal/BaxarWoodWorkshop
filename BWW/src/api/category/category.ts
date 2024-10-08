import { apiInstance } from "../AxiosBaseApi";

const ENDPOINTS = {
    all: '/category/',
};

export const getAllCategories = async () => {
    return await apiInstance.get(ENDPOINTS.all)
}
