import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: '/api',
});

apiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // if (error.response.status === 401) {
        //     localStorage.clear()
        //     window.location.pathname = '/auth';
        //     return Promise.reject(error);
        // } else if (error.response.status === 400) {
        //     if (window.location.pathname !== '/auth') {
        //         // window.location.pathname = '/error';
        //     }
        //     return Promise.reject(error);
        // }

        return Promise.reject(error);
    },
);