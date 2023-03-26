import styles from './ActivityCard.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActivity, getAllActivitiExercises } from '../../../../api/activities'
import { UserContext } from '../../../../contexts/UserContext'
import '../../../../App.css'


function ActivityCard({activity, onDelete}) {
    const [activityExercices, setActivityExercises] = useState([])
    const {user} = useContext(UserContext)

    useEffect(() => {
        getActivity(activity.id)
            .then((res) => {
                setActivityExercises(res.exercises)
                console.log('res in useEffect', res)
            })
            .catch((res) => {
  
            })
    }, [])
  
  


  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
                <Link className={`${styles.card_cell_1} ${'title_outlined'}`} to={`/activity/${activity.id}`}>
                    <p >
                    {activity.name}</p>
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
                Exercises: {activityExercices.length !== 0 ?
                 activityExercices.map((ex) => 
                                <span className={`${styles.exercise} ${''}`}
                                    key={activityExercices.id}
                                    >
                                    {ex.name}

                                </span>)
                            : <h5>NO EXERCISES</h5>
                }
            </span>
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
