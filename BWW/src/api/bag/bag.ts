import { apiInstance } from "../AxiosBaseApi";

const ENDPOINTS = {
    add: '/bag/add',
    all: '/bag/'
};

export const AddToBag = async (good_id: number) => {
    return await apiInstance.post(ENDPOINTS.add, { "good_id": good_id })
}

export const GetAllInBag = async () => {
    return await apiInstance.get(ENDPOINTS.all)
}