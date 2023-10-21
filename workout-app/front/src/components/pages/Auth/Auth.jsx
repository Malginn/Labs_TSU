import React from 'react'
import Layout from '../../common/Layout'
import bgImage from '../../../images/bg-auth.png'
import { useNavigate } from 'react-router-dom' 
import Field from '../../ui/Field/Field'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
import Alert from '../../ui/Alert/Alert'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import Loader from '../../ui/Loader'

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('') //('')  ---по дефолту пустые строки
    const [password, setPassword] = React.useState('')
    const [type, setType] = React.useState('auth')  //auth, reg

    const {mutate: register, isLoading, error, data} = useMutation('Registration', () => $api({
        url:'/users',
        type: 'POST',
        body: {email, password},
        auth: false,
    }),
    {
        onSuccess(data){
        console.log(data)
    }}
    ) //позволяет обновлять и добавлять данные без получения

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(type === 'auth'){
            console.log('auth')
        }else{
            register()
        }
    }

    return (
        <>
        <Layout bgImage={bgImage} backCallback={() => navigate(-1)} heading='Auth || Register' />
            <div className='wrapper-inner-page'>
            {error && <Alert text={error}/>}
            {isLoading && <Loader/>}
                <form onSubmit={handleSubmit}>
                    <Field
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <Field
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.wrapperButtons}>
                        <Button text='Sign up' callback={() => setType('auth')} />
                        <Button text='Sign in' callback={() => setType('reg')} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Auth
