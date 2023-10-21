//@desq  create new exerciseLog
//@route  POST /api/exercises/log
//@access Private

import asyncHandler from "express-async-handler"
import ExerciseLog from "../../../models/exerciseLogModel.js"

export const createNewExerciseLog = asyncHandler(async(req, res) => {
    //ПРИХОДИТ ИЗ ИНСОМНИИ
    const {exerciseId, times } = req.body //забираем три проперти из body() запрос в базу данных на создание упражнения

    let timesArray = [] //упражнения


//TODO: getExerciseLog куда перенести?

        for(let i = 0;i < times; i++){ //добавляем упражнения и дефолтные значения
            timesArray.push({
                weight:0,
                repeat:0
            })
        }        
    

    const exerciseLog = await ExerciseLog.create({ //создаем список для пользователя с упражнениями и повторениями с весом
        user: req.user._id,
        exercise: exerciseId,
        times: timesArray
    })


    res.json(exerciseLog)
})



