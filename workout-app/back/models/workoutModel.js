import mongoose from 'mongoose'

const {ObjectId} = mongoose.Schema

const workoutSchema = mongoose.Schema(
{
    name: {type: String, required: true,},   
    exercises:[{
        type: ObjectId,
        ref: 'Exercise', //откуда objectid
        required: true,
    }],  
},
{
    minimize: false, //чтобы выводились даже пустые объекты и не было ошибок во фронте
    timestamps: true
})

//пишем модель, как будут и других мест к ней обращаться и ссылку на модель
const Workout = mongoose.model('Workout', workoutSchema)

export default Workout