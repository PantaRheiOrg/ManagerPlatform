import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const url: string = 'http://localhost:8080/';

const createAxiosClient = (token: string | null = null): AxiosInstance => {
    const headers = token
        ? {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
          }
        : {
              'Content-Type': 'application/json',
          };

    const client = axios.create({
        baseURL: url,
        headers,
        timeout: 60000,
        withCredentials: false,
    });

    client.interceptors.request.use((config) => {
        const newToken = localStorage.getItem('token');
        if (newToken) {
            config.headers.Authorization = `Bearer ${newToken}`;
        }
        return config;
    });

    client.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
            }
            throw error.response?.data;
        }
    );

    return client;
};
export default createAxiosClient;
