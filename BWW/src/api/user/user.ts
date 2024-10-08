import { apiInstance } from "../AxiosBaseApi";

const ENDPOINTS = {
    login: '/user/login',
};

export const Login = async (email: string, password: string) => {
    return await apiInstance.post(ENDPOINTS.login, {
        "email_address": email,
        "password": password
    }
    )
}