// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { BASE_URL } from '../constants/api';
// import { CONFIG } from '../constants/config';

// let axiosInstance: AxiosInstance | null = null;

// export const getAxiosInstance = (): AxiosInstance => {
//     if (!axiosInstance) {
//         axiosInstance = axios.create({
//             baseURL: BASE_URL,
//             timeout: 10000,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-API-Key': CONFIG.apiKey
//             },
//         });

//         // Request interceptor
//         axiosInstance.interceptors.request.use(
//             (config: AxiosRequestConfig) => {
//                 const token = localStorage.getItem('token');
//                 if (token) {
//                     try {
//                         const parsedToken = JSON.parse(token);
//                         config.headers = config.headers || {};
//                         config.headers.Authorization = `Bearer ${parsedToken}`;
//                     } catch (error) {
//                         console.error('Error parsing token:', error);
//                         localStorage.removeItem('token');
//                     }
//                 }
//                 return config;
//             },
//             (error: AxiosError) => Promise.reject(error)
//         );

//         // Response interceptor
//         axiosInstance.interceptors.response.use(
//             (response: AxiosResponse) => response,
//             (error: AxiosError) => {
//                 if (error.response) {
//                     if (error.response.status === 401) {
//                         localStorage.removeItem('token');
//                         window.location.href = '/login';
//                     }
//                 } else {
//                     console.error('Network Error:', error.message);
//                 }
//                 return Promise.reject(error);
//             }
//         );
//     }
//     return axiosInstance;
// };