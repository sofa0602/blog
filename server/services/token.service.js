import Token from "../models/Token.js"
import { tokenHelper } from "../helpers/token-helper.js"

class TokenService {

    generateTokens(payload) {

        const accessToken = tokenHelper.createAccessToken(payload)
        const refreshToken = tokenHelper.createRefreshToken(payload)
        return { accessToken, refreshToken }
    }

    async saveToken(id, refreshToken) {
        const tokenData = await Token.findOne({ user: id })
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            const token = await tokenData.save()
            return token;
        }
        const token = await Token.create({ user: id, refreshToken })
        return token;
    }
    async removeToken(refreshToken) {
        const data = await Token.deleteOne({ refreshToken })
        return data;
    }
    async findToken(refreshToken) {
        const token = await Token.findOne({ refreshToken })
        return token;
    }
    varifyRefreshToken(refreshToken) {
        return tokenHelper.verifyRefreshToken(refreshToken)
    };
    varifyAccessToken(accessToken) {
        return tokenHelper.verifyAccessToken(accessToken)
    };
}
const tokenService = new TokenService()
export { tokenService }