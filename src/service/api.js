import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tetsumovies-api.onrender.com'
})