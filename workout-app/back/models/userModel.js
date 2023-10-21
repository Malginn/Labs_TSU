import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

//Shema for user(password, email and image)
const userSchema = mongoose.Schema(
{
    name: String,
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    image:{
        before: String,
        after: String
    }
},
{
    minimize: false, //чтобы выводились даже пустые объекты и не было ошибок во фронте
    timestamps: true
})

//запрос на сравнение паролей
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

//если пароль поменялся, идем дальше(next())перед сохранением снова хэшируем пароль(шифруем)
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    //создаем 10 строк соли и хэшируем пароль
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

//пишем модель, как будут и других мест к ней обращаться и ссылку на модель
const User = mongoose.model('User', userSchema)

export default User