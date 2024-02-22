import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    //Set token after send request
    let token = localStorage.getItem('access_token');
    if(token) {
        token = JSON.parse(token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});



export default axiosClient;