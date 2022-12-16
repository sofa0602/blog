import jwt from "jsonwebtoken"

class TokenHelper {

    createAccessToken(payload) {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" })
    }
    createRefreshToken(payload) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" })
    }
    verifyAccessToken(payload) {
        return jwt.verify(payload, process.env.ACCESS_TOKEN_SECRET)
    }
    verifyRefreshToken(payload) {
        return jwt.verify(payload, process.env.REFRESH_TOKEN_SECRET)
    }
    getToken(req) {
        const token = req.headers?.authorization?.split(' ')[1] ?? []
        return token
    }
}
const tokenHelper = new TokenHelper()
export { tokenHelper } 