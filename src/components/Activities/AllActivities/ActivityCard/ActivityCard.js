import styles from './ActivityCard.module.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ExperimentOutlined } from '@ant-design/icons'
import { deleteActivity } from '../../../../api/activities'

function ActivityCard({activity}) {

    const navigate = useNavigate()

    const onDelete = () => {
        deleteActivity(activity.id)
            .then((res) => {console.log(res, 'res in onDelete res')
                navigate('/dashboard')
                            })
            .catch((res) => console.log(res, 'res in onDelete res'))
    }   

  return (
    <div className={styles.card}>
        <div className={styles.card_info}>

            <h3 className={styles.card_cell_1}>{activity.name}</h3>

            <span className={`${styles.card_cell_2} ${styles.card_cell}`}>Info: {activity.description}</span>

            <span className={`${styles.card_cell_3} ${styles.card_cell}`}>Duration: {activity.duration}</span>
            <span className={`${styles.card_cell_4} ${styles.card_cell}`}>Type: {activity.type}</span>
            {activity.type == 3 ?<>
                <span className={`${styles.card_cell_5} ${styles.card_cell}`}>Distance: {activity.sets}</span>
                <span className={`${styles.card_cell_6} ${styles.card_cell}`}>Pace: {activity.reps}</span>
                <span className={`${styles.card_cell_7} ${styles.card_cell}`}>Speed: {activity.weights}</span>
                <span className={`${styles.card_cell_8} ${styles.card_cell}`}>Hear Rate: {activity.cues}</span>
                <span className={`${styles.card_cell_9} ${styles.card_cell}`}>RPE: {activity.rpe}</span>
            </>
        : null    
        }

            <span className={`${styles.card_cell_10} ${styles.card_cell}`}>Exercises: {activity.exercises}</span>

            <Link className={`${styles.card_cell_11} ${styles.card_cell} ${styles.card_cell_link}`} 
                to={`/edit-activity/${activity.id}/`}>
                Edit
            </Link>
            <Link className={`${styles.card_cell_12} ${styles.card_cell} ${styles.card_cell_link}`}  
                onClick={onDelete}>
                Delete
            </Link>

        </div>
    </div>
  )
}

export default ActivityCard
