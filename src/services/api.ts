import axios from "axios";
import { useUserStore } from "../stores/userStore";

const api = axios.create({
    baseURL:"http://localhost:5000/api"
});

api.interceptors.request.use(
    (config) =>{
        const userStore = useUserStore();
        const token = userStore.user?.token

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },

    (error) => Promise.reject(error)
)

export default api;