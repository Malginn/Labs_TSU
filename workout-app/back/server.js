//импортируем и подлкчаем Express, пакет для цветной консоли, ИСПОЛЬЗУЕМ EXPRESS в формате JSON
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors' 

//Config
import {connectDB} from './config/db.js'  

//Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//Routes    
import userRoutes from './routes/userRoutes.js' //импортирnpуем роут
import exerciseRoutes from './routes/exerciseRoutes.js' //импортирnpуем роут
import workoutRoutes from './routes/workoutRoutes.js'

//подключаем dotenv
dotenv.config()
//подлкючаем базу данных
connectDB()
//заносим экспресс в переменную app
const app = express()

//подключаем morgan(вывод запросов в консоль(для продакшн)) !Только для разработки через файл .env
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json()) //используем экспресс в формате json

app.use('/api/users', userRoutes)  //подключаем И ПИШЕМ ПУТЬ ДО РОУТА
app.use('/api/exercises', exerciseRoutes)  
app.use('/api/workouts', workoutRoutes)  

app.use(notFound)
app.use(errorHandler)


//для запуска
const PORT = process.env.PORT || 5000
app.listen(PORT,
     console.log(
         `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
     ) 
    )


