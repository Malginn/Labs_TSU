//@desq  update exerciseLog
//@route  PUT /api/exercises/log
//@access Private

import asyncHandler from "express-async-handler"
import ExerciseLog from "../../../models/exerciseLogModel.js"

export const updateExerciseLog = asyncHandler(async(req, res) => {
    
    const {logId, timeIndex, key, value } = req.body

    const currentLog = await ExerciseLog.findById(logId)

    if(!currentLog){
        res.status(404)
        throw new Error('Данный лог не найден!')
    }

    let newTimes = currentLog.times

    if(!timeIndex || !key || !value){
        res.status(404)
        throw new Error('Вы не указали все поля!')
    }
    newTimes[timeIndex][key] = value

    currentLog.times = newTimes

    // const exerciseLog = await ExerciseLog.update({  
    //     user: req.user._id,
    //     exercise: exerciseId,
    //     times: timesArray
    // })

    const updatedLog = await currentLog.save()

    res.json(updatedLog)
})




//@desq  update exerciseLog completed
//@route  PUT /api/exercises/log/
//@access Private

export const updateCompletedExerciseLog = asyncHandler(async(req, res) => {
    
    const {logId, completed} = req.body

    const currentLog = await ExerciseLog.findById(logId)

    if(!currentLog){
        res.status(404)
        throw new Error('Данный лог не найден!')
    }

    currentLog.completed = completed

    const updatedCompletedLog = await currentLog.save()

    res.json(updatedCompletedLog)
})




