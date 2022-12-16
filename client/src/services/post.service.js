import axios from "./services.js"
import { POSTS_PATH } from "../enums/api-path/api-path.js"
export class PostApi {

    // constructor({ url }) {
    //     this.url = url
    // }
    async getPosts() {
        const { data } = await axios.get(`${POSTS_PATH.GET_POSTS_URL}`);
        return data;
    }
    async setReaction(id) {
        const { data } = await axios.patch(`${POSTS_PATH.SET_REACTION_URL}/${id}`);
        return data;
    }
}
