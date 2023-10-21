// этот контроллер @desq получает user profile по адресу @route и нужно авторизоваться(private), чтобы его получить
//@desq         Get user profile
//@route(путь)  GET /api/users/profile
//@access       Private(авторизованный пользователь   )

import asyncHandler from "express-async-handler"
import ExerciseLog from "../../models/exerciseLogModel.js"
import WorkoutLog from "../../models/workoutLogModel.js"
import User from "../../models/userModel.js"

//ищем по id и выдаем пользователя get запрос, если его нет,то у нас middlware -> errorMiddleware.js
export const getUserProfile = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id) .select('-password').lean()  //lean() превращ в объект вместо res toObject

    //get statistic
    const exerciseLogByUser = await ExerciseLog.find({
        user: user._id,
        completed: true
    })

    let CountExerciseTimesCompleted = 0
    let kgs = 0

    exerciseLogByUser.forEach(log => {
        CountExerciseTimesCompleted = log.times.length    //количество тренировок завершенных

        log.times.forEach(item =>{ //вес суммируем из упражнений
            kgs += item.weight
        })
    })

    const minutes = Math.ceil(CountExerciseTimesCompleted * 2.5)

    const workouts = await WorkoutLog.find({user: user._id, completed: true}).countDocuments()


    



    res.json({
           ...user, minutes, workouts, kgs
    })
})
    