import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const workoutLogSchema = mongoose.Schema(
{
    user:{
        type: ObjectId,
        ref: 'User',
        required:true,
    },   
    workout:{type: ObjectId, ref: 'Workout', required: true,},
    completed: {type: Boolean, default: true,},
},
{
    minimize: false, //чтобы выводились даже пустые объекты и не было ошибок во фронте
    timestamps: true
})

//пишем модель, как будут и других мест к ней обращаться и ссылку на модель
const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema)

export default WorkoutLog