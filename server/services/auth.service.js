import User from "../models/User.js"
import { UserDto } from "../dtos/user.dto.js";
import { tokenService } from "./token.service.js"
import { encrypt } from "../helpers/ecrypt.js";
import { decrypt } from "../helpers/decrypt.js";
import { ApiError } from "../exception/api-error.js"
import { ERROR_MESSAGES } from "../enums/messages/error-messages.enum.js"

class AuthService {
    async registration(username, email, password) {
        try {
            const userByUsername = await User.findOne({ username })
            const userByEmail = await User.findOne({ email })

            if (userByUsername || userByEmail) {
                throw ApiError.BadRequest(ERROR_MESSAGES.EMAIL_USERNAME_EXIST)
            }
            const hashPassword = await encrypt(password, 5)

            const user = await User.create({ username, email, password: hashPassword })
            const userDto = new UserDto(user)

            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken)

            return { user: userDto, ...tokens }

        } catch (err) {
            return {
                message: err.message,
                status: err.status
            }

        }
    }
    async login(email, password) {
        try {
            const user = await User.findOne({ email })

            let isPasswordCorrect;

            if (user) {
                isPasswordCorrect = await decrypt(password, user.password)

            }

            if (!user || !isPasswordCorrect) {
                throw ApiError.BadRequest(ERROR_MESSAGES.EMAIL_PASSWORD_WRONG)

            }

            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken)

            return { user: userDto, ...tokens }


        } catch (err) {
            return err.message
        }
    }

    async logout(refreshToken) {
        try {
            return await tokenService.removeToken(refreshToken)
        } catch (err) {
            return err.message
        }
    }
    async refresh(refreshToken) {
        try {
            if (!refreshToken) {
                throw ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
            }
            const userData = tokenService.varifyRefreshToken(refreshToken)

            const tokenFromDb = await tokenService.findToken(refreshToken)

            if (!userData || !tokenFromDb) {
                throw ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
            }

            const user = await User.findById(userData.id)
            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken)

            return { user: userDto, ...tokens }

        } catch (err) {
            return err.message
        }
    }
    async getUser(accessToken) {
        try {
            if (!accessToken) {
                throw ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
            }
            const userData = tokenService.varifyAccessToken(accessToken)

            if (!userData) {
                throw ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
            }

            const { id } = userData

            const user = await User.findById(id)

            const userDto = new UserDto(user)

            return { user: userDto }
        } catch (error) {
            return error
        }
    }
}

const authService = new AuthService()
export { authService }