import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../../helpers/generateToken.js'
//@desq Register user
//@route(путь)  POST /api/users/
//@access Public
//npm i express-async-handler(обработчик ошибок

//пишем запрос на регистрацию(получает(req) мэил и пароль и смотрит если в базе
export const regUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body

//проверка в базе
    const isHaveUser =await  User.findOne({ email })  

    //если есть, вывод ошибки
    if(isHaveUser){
        res.status(400)
        //создадим новую ошибку
        throw new Error('Данный пользователь уже зарегистрирован')
    }

    //создание email and password для userShema
    const user = await User.create({
        email, password,    
    })

    //Create token
    const token = generateToken(user._id)
    
    //вывод схемы юзера и токен в отдельных объектах
    res.json({ user, token })
})