import axios from "./services.js"
import { AUTH_PATH } from "../enums/api-path/api-path.js"
export class AuthApi {

    // constructor({ url }) {
    //     this.url = url
    // }
    async login(payload) {
        const { data } = await axios.post(`${AUTH_PATH.LOGIN_URL}`, payload);
        return data;
    }
    async registration(payload) {
        const { data } = await axios.post(`${AUTH_PATH.REGISTRATION_URL}`, payload);
        return data;
    }
    async logout() {
        const { data } = await axios.post(`${AUTH_PATH.LOGOUT_URL}`);
        return data;
    }
    async getCurrentUser() {
        const { data } = await axios.get(`${AUTH_PATH.LOGIN_URL}`);
        return data;
    }
}
