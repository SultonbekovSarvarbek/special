import axios from "axios";
const baseURL = import.meta.env.VITE_APP_URL;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default axiosInstance;
