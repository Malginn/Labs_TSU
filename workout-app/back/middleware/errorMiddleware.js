//создали ошибку, когда будет не найден пользователь
export const notFound = (req, res, next) =>{
    const error  = new Error(`Not found ${req.originalUrl}`)
    res.status(404)
    next(error)
}

//каким-то образом отловим ошибку из regUser, когда пользователь уже зареган и сообщение!
//создаём обработчик ???(вместо обычного вывода результата запроса получим объект message and stack ДЛЯ УДОБНОГО ВЫВОДА НА ФРОНТ)
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}