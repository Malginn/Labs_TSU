//@desq   Create new exercise
//@route  POST /api/users/exercises
//@access Private

import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

export const createNewExercise = asyncHandler(async(req, res) => {
    const {name, times, imageIndex} = req.body //забираем три проперти из body() запрос в базу данных на создание упражнения

    const exercise = await Exercise.create({
        name,
        times,
        imageIndex
    })

    res.json(exercise)
})




//@desq  update exercise
//@route  PUT /api/exercises
//@access Private

export const updateExercise = asyncHandler(async(req, res) => {
    
    const { exerciseId, name, times, imageIndex} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if(!exercise){
        res.status(404)
        throw new Error('Данное упражнение не найдено!')
    }

    exercise.times = times
    exercise.name = name    
    exercise.imageIndex = imageIndex    

    const updatedExercise = await exercise.save()

    res.json(updatedExercise)
})





//@desq  delete exercise
//@route  DELETE/api/exercises
//@access Private

export const deleteExercise = asyncHandler(async(req, res) => {
    
    const { exerciseId, name, times, imageIndex} = req.body

    const exercise = await Exercise.findById(exerciseId)

    if(!exercise){
        res.status(404)
        throw new Error('Данное упражнение не найдено!')
    }   

    await exercise.remove()

    res.json({ message: 'Exercise was been removed'})
})