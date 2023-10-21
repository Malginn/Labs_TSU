//npm i jsonwebtoken
import jwt from "jsonwebtoken"
//создаём токен для аутентификации см в инетере jwt(access, refresh,hacking)
export const generateToken = (userId) => 
    jwt.sign(
        {
        userId,
        },
        process.env.ACCESS_TOKEN,
        { //срок действия токена
            expiresIn: '10d',
        }
    )