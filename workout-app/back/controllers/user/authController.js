import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../../helpers/generateToken.js'
//@desq Auth user
//@route  POST /api/users/login
//@access Public

//пишем запрос на вход(получает(req) мэил и пароль и смотрит если в базе
export const authUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body

//проверка в базе
    const user =await  User.findOne({ email })  
    //проверка пароля и if true создаем токена для входа и выдаем профиль иначе выдаем ошибку входа
    if(user && (await user.matchPassword(password))){
    const token = generateToken(user._id)
    
    //вывод схемы юзера и токен в отдельных объектах в insomnia
    res.json({ user, token })
    } else{
        res.status(401)
        throw new Error('Ошибка авторизации email или пароль')
    }
})