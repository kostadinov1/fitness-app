import styles from './ActivityCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'


function ActivityCard({activity, onDelete}) {

  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
                <Link to={`/activity/${activity.id}`}>
                    <h3 className={styles.card_cell_1}>
                    {activity.name}</h3>
                </Link>
            <span className={`${styles.card_cell_2} ${styles.card_cell}`}>
                Info: {activity.description}</span>
            <span className={`${styles.card_cell_3} ${styles.card_cell}`}>
                Duration: {activity.duration}</span>
            <span className={`${styles.card_cell_4} ${styles.card_cell}`}>
                Type: {activity.type}</span>
            {activity.type === 3 ?
                <>
                    <span className={`${styles.card_cell_5} ${styles.card_cell}`}>
                        Distance: {activity.sets}</span>
                    <span className={`${styles.card_cell_6} ${styles.card_cell}`}>
                        Pace: {activity.reps}</span>
                    <span className={`${styles.card_cell_7} ${styles.card_cell}`}>
                        Speed: {activity.weights}</span>
                    <span className={`${styles.card_cell_8} ${styles.card_cell}`}>
                        Hear Rate: {activity.cues}</span>
                    <span className={`${styles.card_cell_9} ${styles.card_cell}`}>
                        RPE: {activity.rpe}</span>
                </>
                : null    
                }
            <span className={`${styles.card_cell_10} ${styles.card_cell}`}>
                Exercises: {activity.exercises}</span>
            <Link className={`${styles.card_cell_11} ${styles.card_cell} ${styles.card_cell_link}`} 
                to={`/edit-activity/${activity.id}/`}>
                Edit
            </Link>
            <Link className={`${styles.card_cell_12} ${styles.card_cell} ${styles.card_cell_link}`}  
                onClick={() => onDelete(activity.id)}>
                Delete
            </Link>

        </div>
    </div>
  )
}

export default ActivityCard
