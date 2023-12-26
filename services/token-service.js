const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token.model.js')
class TokenService {


    generateTokens(payload) {
        const accessToken = jwt.sign(payload, 'jwt-secret-key', {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload, 'jwt-refresh-secret-key', {expiresIn:'30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, 'jwt-secret-key');
            return userData;
        }
        catch (e) {
            return null;
        }

    }
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, 'jwt-refresh-secret-key');
            return userData;
        }
        catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user:userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel.create({userId, refreshToken})
        return token;

    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData;
    }
}
   
 

module.exports = new TokenService();