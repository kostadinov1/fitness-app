import { ExperimentOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ExerciseCard.module.css'


function exerciseCard({exercise}) {
  return (
    <Link to={'/exercise/id'}>
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
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Edit
                </Link>
            </div>
            <div className={styles.card_action}>
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Delete
                </Link>
            </div>
        </div>
    </div>
    </Link>
  )
}


export default exerciseCard
