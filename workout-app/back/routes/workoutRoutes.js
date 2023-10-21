import express from 'express'
import { createNewWorkoutLog } from '../controllers/workout/logController.js'
import { createNewWorkout, getWorkout, updateWorkout, deleteWorkout } from '../controllers/workout/workoutController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout)
router.route('/log').post(protect, createNewWorkoutLog)
router.route('/:id').get(protect, getWorkout)
router.route('/').put(protect, updateWorkout)
router.route('/').delete(protect, deleteWorkout)

export default router
