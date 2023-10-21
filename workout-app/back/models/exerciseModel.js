import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema(
{
    name: {type: String, required: true,},   
    times:{
        type: Number,
        required: true,
    },  
    imageIndex:{
        type: Number,
        required: true,
    },
},
{
    minimize: false, //чтобы выводились даже пустые объекты и не было ошибок во фронте
    timestamps: true
})

//пишем модель, как будут и других мест к ней обращаться и ссылку на модель
const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise