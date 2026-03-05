const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const tokenService = require('./token.service')

class AuthService {
    async register(email , password) {
       
        const existUser = await userModel.findOne({ email })

        if(existUser) {
            throw new Error(`User with existing email ${email} already registered`)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({ email, password: hashPassword})

        const UserDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...UserDto })
        
        await tokenService.saveToken(UserDto.id, tokens.refreshToken)


        return { user:  UserDto , ...tokens }
    }

    async activation(userId) {

        const user = await userModel.findById(userId)

        if(!user) {
            throw new Error('User not found')

        }

        user.isActivated = true
        await user.save()


    }
 }


module.exports = new AuthService()
