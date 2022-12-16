import { tokenService } from "../services/token.service.js"
import { ApiError } from "../exception/api-error.js"
import { ERROR_MESSAGES } from "../enums/messages/error-messages.enum.js"

export function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return next(ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR))

        }
        const accessToken = authHeader.split(" ")[1]
        if (!accessToken) {
            return next(ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR))
        }

        const userData = tokenService.varifyAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR))
        }
        req.user = userData
        next()
    } catch (err) {
        return next(ApiError.UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED_ERROR))
    }

}