import { apiInstance } from "../AxiosBaseApi";

const ENDPOINTS = {
    add: '/favorites/add',
};

export const AddToFavorites = async (good_id: number) => {
    return await apiInstance.post(ENDPOINTS.add, { "good_id": good_id })
}
