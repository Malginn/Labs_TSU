import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const exerciseLogSchema = mongoose.Schema(
{
    user:{
        type: ObjectId,
        ref: 'User',
        required:true,
    },   
    // workout:{type: ObjectId, ref: 'Workout', required: true},  //привязка к тренировке 
    exercise:{type: ObjectId, ref: 'Exercise', required: true}, //упражнение мы должны привязывать к конкретной тренировке, т.кб упражнения могут повторяться
    completed: {type: Boolean, default: false, required: true}, //тренировка завершена(после последнего упражнения)
    times: [
        {
        weight:{ type: Number, required: true},
        repeat:{ type: Number, required: true},
        completed: {type: Boolean, default: false},
    },
],
},
{
    minimize: false, //чтобы выводились даже пустые объекты и не было ошибок во фронте
    timestamps: true
})

//пишем модель, как будут и других мест к ней обращаться и ссылку на модель
const ExerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema)

export default ExerciseLog