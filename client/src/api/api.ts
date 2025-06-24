import axios from "axios";
import { API_URL } from "../consistant";

const api = axios.create({
    baseURL: API_URL,
})

export default api;