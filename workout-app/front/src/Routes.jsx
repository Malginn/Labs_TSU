import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home/Home'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import Auth from './components/pages/Auth/Auth'

const App = () => {//это всё будет children?? //exact={true} чтобы учитывался только /, Path- адрес
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/new-workout" element={ <NewWorkout /> } />
                <Route path="/auth" element={ <Auth /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
