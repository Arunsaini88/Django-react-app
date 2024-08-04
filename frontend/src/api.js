import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/djangoreactapp/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (confirm) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      confirm.headers.Authorization = `Bearer ${token}`;
    }
    return confirm;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
