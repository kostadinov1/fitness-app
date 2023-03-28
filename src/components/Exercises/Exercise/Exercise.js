import styles from './Exercise.module.css'

import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { deleteExercise, getExercise } from '../../../api/exercises'
import ListCard from '../../Cards/ListCard/ListCard'

function Exercise() {
    const {id} = useParams()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const [ exercise, setExercise ] = useState({})
    
    useEffect(() => {
        getExercise(id)
            .then((res) => {
                setExercise(res)
                console.log('res in useEffect', res)
            })
            .catch((res) => {
                console.log('res in useEffect', res)
            })
    }, [])

    const onDelete = () => {
        deleteExercise(user, exercise.id)
            .then((res) => {console.log(res, 'res in exercise rac')
                navigate('/all-exercises')
                            })
            .catch((res) => console.log(res, 'res in exercise rac'))
    }   


  return (
    <section className={styles.exercise}>
        <ListCard></ListCard>
        <div className={styles.sider_2}>
        <h4>Quick</h4>
                <ul>
                    <li><Link to={'/create-activity'}>Create Activity</Link></li>
                    <li><Link to={'/all-exercises'}>Exercises</Link></li>
                    <li><Link to={'/'}>Profile</Link></li>
                </ul>
        </div>    
        <div className={styles.view}>
            <div className={styles.card}>
                <div className={styles.card_info}>
                    <h3 className={styles.card_cell_1}><Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link></h3>
                    <span className={`${styles.card_cell_2} ${styles.card_cell}`}>Info: {exercise.description}</span>
                    <span className={`${styles.card_cell_3} ${styles.card_cell}`}>Sets: {exercise.sets}</span>
                    <span className={`${styles.card_cell_4} ${styles.card_cell}`}>Reps: {exercise.reps}</span>
                    <span className={`${styles.card_cell_5} ${styles.card_cell}`}>KG: {exercise.weights_in_kg}</span>
                    <span className={`${styles.card_cell_6} ${styles.card_cell}`}>Cues: {exercise.cues}</span>
                    <span className={`${styles.card_cell_7} ${styles.card_cell}`}>Type: {exercise.type}</span>
                    <Link className={`${styles.card_cell_8} ${styles.card_cell} ${styles.card_cell_link}`} 
                        to={`/edit-exercise/${exercise.id}/`}>
                        Edit
                        </Link>
                    <Link className={`${styles.card_cell_9} ${styles.card_cell} ${styles.card_cell_link}`}  
                        onClick={onDelete}>
                        Delete
                        </Link>
                </div>
            </div>
            <div className={styles.details}>
                <hr></hr>
                <h4>Description: </h4>
                <p>{exercise.description}</p>
                <hr></hr>
                <h4>Cues: </h4>
                <p>{exercise.cues}</p>
                <hr></hr>
            </div>
        </div>    
    </section>
  )
}

export default Exercise
