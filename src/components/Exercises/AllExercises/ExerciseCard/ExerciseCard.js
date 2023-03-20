import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteExercise } from '../../../../api/exercises'
import { UserContext } from '../../../../contexts/UserContext'
import styles from './ExerciseCard.module.css'


function ExerciseCard({exercise}) {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    
    const onDelete = () => {
        deleteExercise(exercise.id, user.id)
            .then((res) => {console.log(res, 'res in exercise rac')
                navigate('/all-exercises')
                            })
            .catch((res) => console.log(res, 'res in exercise rac'))
    }   

  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
            <h3 className={styles.card_cell_1}><Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link></h3>
            <span className={`${styles.card_cell_2} ${styles.card_cell}`}>Info: {exercise.description}</span>
            <span className={`${styles.card_cell_3} ${styles.card_cell}`}>Sets: {exercise.sets}</span>
            <span className={`${styles.card_cell_4} ${styles.card_cell}`}>Reps: {exercise.reps}</span>
            <span className={`${styles.card_cell_5} ${styles.card_cell}`}>KG: {exercise.weights}</span>
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
  )
}


export default ExerciseCard
