import { AuthApi } from "./auth.service";
import { PostApi } from "./post.service";
import { Storage } from "./storage.service";
import { BASE_URL } from "../enums/api-path/api-path.js"

import axios from 'axios';


const $api = axios.create({
    // withCredentials: true,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

const auth = new AuthApi()
const storage = new Storage({
    storage: localStorage
});
const posts = new PostApi()

export { auth, storage, posts }
export default $api

