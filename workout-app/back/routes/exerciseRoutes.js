//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { createNewExerciseLog } from '../controllers/exercise/log/createController.js'
import { createNewExercise, updateExercise, deleteExercise } from '../controllers/exercise/mainController.js'
import { protect } from '../middleware/authMiddleware.js'
import { getExerciseLog } from '../controllers/exercise/log/getController.js'
import { updateExerciseLog } from '../controllers/exercise/log/updateController.js'
import { updateCompletedExerciseLog } from '../controllers/exercise/log/updateController.js'


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/').post(protect, createNewExercise)
router.route('/log').post(protect, createNewExerciseLog)
router.route('/log').put(protect, updateExerciseLog)
router.route('/').put(protect, updateExercise)
router.route('/').delete(protect, deleteExercise)
router.route('/log/completed').put(protect, updateCompletedExerciseLog)
router.route('/log/:id').get(protect, getExerciseLog)


export default router //экспортируем для импорта в проект
