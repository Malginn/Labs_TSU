//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { authUser } from '../controllers/user/authController.js'
import { getUserProfile } from '../controllers/user/profileController.js' //импортировали контроллер
import { regUser } from '../controllers/user/regController.js'
import { protect } from '../middleware/authMiddleware.js'


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/profile').get(protect, getUserProfile)  //admin, SEO
router.route('/').post(regUser)  
router.route('/login').post(authUser)  


export default router //экспортируем для импорта в проект

