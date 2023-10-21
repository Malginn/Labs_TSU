import React from 'react'
import Layout from '../../common/Layout'
import bgImage from '../../../images/bg-auth.png'
import { useNavigate } from 'react-router-dom' 
import ReactSelect from 'react-select' //выпадающие списки см документацию
import Field from '../../ui/Field/Field'
import Button from '../../ui/button/Button'
import { optionColor } from './optionColor'
import { Link } from 'react-router-dom'

const NewWorkout = () => {
    const navigate = useNavigate()
    const [name, setName] = React.useState()
    const [exercises, setExercises] = React.useState([])

    const handleSubmit = () =>{
        console.log('submit')
    }

    return (
        <>
        <Layout bgImage={bgImage} backCallback={() => navigate(-1)} heading='Create new workout' />
            <div className='wrapper-inner-page'>
                <form onSubmit={handleSubmit} >
                    <Field
                        onSubmit={handleSubmit}
                        placeholder='Enter name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Link to='/new-exercise' className='darkLink'>Add New exercise</Link>
                    <ReactSelect
                        classNamePrefix='select2-selection'
                        placeholder='Exercises...'
                        title='Exercises'
                        options={[
                            {value: 'ervefdce', label: 'Push-ups'},
                            {value: 'efvrfve', label: 'Pull-ups'},
                        ]}
                        value={exercises}
                        onChange={setExercises}
                        theme={theme => optionColor(theme)}
                        isMulti={true}
                     /> 
                    <Button text='Create' callback={() =>{}} />
                </form>
            </div>
        </>
    )
}

export default NewWorkout
