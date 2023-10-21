//@desq   Get new exerciseLog
//@route  GET /api/exercises/log/:id
//@access Private
import asyncHandler from "express-async-handler"
import { reBuildTimes } from "../../../helpers/exerciseLog.js"
import ExerciseLog from "../../../models/exerciseLogModel.js"

export const getExerciseLog = asyncHandler(async(req, res) => {
    const exerciseLog = await ExerciseLog.findById(req.params.id)
    .populate('exercise','name imageId')
    .lean()//делаем из этого объект? вместо потом  exerciseLog.toObject //получаем список по id(раскрыть exercise должны внутри)

    if(!exerciseLog){
        res.status(404)
        throw new Error('Лог не найден')
    }


    const prevExerciseLogs = await ExerciseLog.find({  //поиск предыдущей тренировки
        user: req.user._id,
        exercise: exerciseLog._id,
        }) .sort('desc')  //сортировка по дате

    const prevExLog = prevExerciseLogs[0]
    // const log = exerciseLog.toObject()

    let newTimes = reBuildTimes(exerciseLog)  //новые подходы

    if(prevExLog) newTimes = reBuildTimes(exerciseLog, prevExLog)


    res.json({
        ...exerciseLog,
        times: newTimes,
    })
    
})
