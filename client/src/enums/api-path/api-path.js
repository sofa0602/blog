const BASE_URL = "http://localhost:8080"

const AUTH_PATH = {
    BASE_URL: BASE_URL,
    LOGIN_URL: "/users/login",
    REGISTRATION_URL: "/users/registration",
    LOGOUT_URL: "/users/logout"
}
const POSTS_PATH = {
    GET_POSTS_URL: "/posts",
    SET_REACTION_URL: "/posts/setReaction"
}


export { BASE_URL, AUTH_PATH, POSTS_PATH }