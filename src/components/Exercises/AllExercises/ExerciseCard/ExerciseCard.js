import { ExperimentOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteExercise } from '../../../../api/exercises'
import styles from './ExerciseCard.module.css'


function ExerciseCard({exercise}) {
    const navigate = useNavigate()

    const onDelete = () => {
        deleteExercise(exercise.id)
            .then((res) => {console.log(res, 'res in exercise rac')
                navigate('/dashboard')
                            })
            .catch((res) => console.log(res, 'res in exercise rac'))
    }   

  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
            <h3>{exercise.name}</h3>
            <ul>
                <li>Info: {exercise.description}</li>
                <li>Sets: {exercise.sets ? exercise.sets : 'none'}</li>
                <li>Reps: {exercise.reps ? exercise.reps : 'none'}</li>
                <li>Type: {exercise.type}</li>
                <li>Created on: {exercise.created_on.slice(0, 10)}</li>
            </ul>
        </div>
        <div className={styles.card_actions}>
            <div className={styles.card_action}>
                <Link to={`/edit-exercise/${exercise.id}/`}>
                    Edit
                </Link>
            </div>
            <div className={styles.card_action}>
            <Link  onClick={onDelete}>
                    Delete
                </Link>
            </div>
        </div>
    </div>
  )
}


export default ExerciseCard
