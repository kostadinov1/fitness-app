import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ExerciseCard.module.css'


function ExerciseCard({exercise, onDelete}) {
    

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
                onClick={() => {onDelete(exercise.id)}}>
                Delete
                </Link>
        </div>
    </div>
  )
}


export default ExerciseCard
