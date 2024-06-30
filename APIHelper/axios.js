import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://backend-art-era.vercel.app/api", // Default to localhost:5000/api if BASE_API is not set
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosLocalInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { axiosInstance, axiosLocalInstance };
