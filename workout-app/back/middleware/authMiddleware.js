import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

import User from "../models/userModel.js"
//пишем защита от гостей(не авториз. польз.)
export const protect = asyncHandler(async(req, res, next) =>{
    let token

    //Bearer ffkfjh4u547^^7 проверяем есть ли токен(?. если undefined, то это не будет учитыв)
    if(req.headers.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1] //берем второй элемент то есть ffkfjh4u547^^7(token) без бирора
        
        //МЕТОД JWT ВЕРИФИКАЦИЯ
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)

        //ищем пользователя по id и не будем возвращать пароль
        const userFound = await User.findById(decoded.userId).select('-password')

        //если пользователь найден, то в req(для работы с данными пользователя) заносим его
        if(userFound){
            req.user = userFound
            next()
        }else{
            res.status(401)
            throw new Error('Не авторизован, токен не работает')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Не авторизован, без токена')
    }
})

// export const admin
// export const SEO
