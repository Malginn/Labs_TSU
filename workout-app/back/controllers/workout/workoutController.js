//@desq   create new workout
//@route  POST /api/users/workouts
//@access Private

import AsyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js"

export const createNewWorkout = AsyncHandler(async(req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({
        name,
        exercises: exerciseIds,
    })

    res.json(workout)
})




//@desq   Get workout
//@route  GET /api/workouts/:id
//@access Private

export const getWorkout = AsyncHandler(async(req, res) => {
    const workout = await Workout.findById(req.params.id)
    .populate('exercises') //чтобы раскрылось содержимое внутри workout exercises ИНАЧЕ выведется id упражнений
    .lean()  //метод который добавил minutes в тренировку(внутри объекта)

    const minutes = Math.ceil(workout.exercises.length * 3.75)  //примерное время тренировки

    res.json({ ...workout, minutes}) //выводим правильно тренировку с минутами
})




//@desq  update workout
//@route  PUT /api/workouts
//@access Private

export const updateWorkout = AsyncHandler(async(req, res) => {
    
    const {workoutId, name, exerciseIds} = req.body

    const workout = await Workout.findById(workoutId)

    if(!workout){
        res.status(404)
        throw new Error('Данная тренировка не найдена!')
    }

    workout.exercises = exerciseIds
    workout.name = name

    const updatedWorkout = await workout.save()

    res.json(updatedWorkout)
})






//@desq  delete workout
//@route  DELETE /api/workouts
//@access Private

export const deleteWorkout = AsyncHandler(async(req, res) => {
    
    const { workoutId } = req.body

    const workout = await Workout.findById(workoutId)

    if(!workout){
        res.status(404)
        throw new Error('Данная тренировка не найдена!')
    }   

    await workout.remove()

    res.json({ message: 'Workout was been removed'})
})

