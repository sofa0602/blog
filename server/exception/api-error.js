import { HttpCode } from "../enums/http/http-code.enum.js"
class ApiError extends Error {
    status
    errors
    constructor(message, status, errors = []) {
        super(message)
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ApiError('Not authorized', HttpCode.UNAUTHORIZED,)
    }

    static BadRequest(message, errors = []) {
        return new ApiError(message, HttpCode.BAD_REQUEST, errors);
    }
}
export { ApiError }