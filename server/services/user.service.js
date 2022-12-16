import User from "../models/User.js"

class UserService {
    async getUsers() {
        try {
            const users = await User.find()
            return users
        } catch (err) {
            return err.message
        }
    }
    // async getPostOwner(id) {
    //     try {
    //         const postOwner = await User.findById(id)
    //         return postOwner
    //     } catch (err) {
    //         return err
    //     }
    // }
}

const userService = new UserService()
export { userService }