import Button from "../../ui/button/Button"
import Layout from '../../common/Layout'
import Counters from '../../ui/Counters/Counters'
import bgImage from '../../../images/photo_2021-11-07_15.jpg'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

const Home = () =>{
    return (
        <>
        <Layout height="100%" bgImage={bgImage}>
            <Link to="/new-workout" >
            <Button
             type ='main'
              text='New'
               callback={() => {}}
            />
            </Link>
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
            <Counters />
        </Layout>
        </>
    )  
}

export default Home
