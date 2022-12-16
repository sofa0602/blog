import { tokenHelper } from "../helpers/token-helper.js"
import { authService } from "../services/auth.service.js"
import { userService } from "../services/user.service.js"

class UserController {

    async registration(req, res, next) {
        try {
            const { username, email, password } = req.body

            const userData = await authService.registration(username, email, password)
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)

        } catch (err) {
            next(err)
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await authService.login(email, password)
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (err) {
            res.json({
                message: err
            })
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await authService.logout(refreshToken);
            res.clearCookie("refreshToken")
            res.json({ token })
        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await authService.refresh(refreshToken);
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }
    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers()
            res.json(users)
        } catch (err) {
            console.log(err.message)
        }
    }
    async getUser(req, res, next) {
        try {
            const accessToken = tokenHelper.getToken(req)
            const user = await authService.getUser(accessToken)
            res.json(user)
        } catch (err) {
            console.log(err.message)
        }
    }
    // async getPostOwner(req, res, next) {
    //     try {
    //         const { id } = req.params
    //         const postOwner = await userService.getPostOwner(id)
    //         res.json(postOwner)
    //     } catch (err) {
    //         next(err)
    //     }
    // }

}

const userController = new UserController()
export { userController }