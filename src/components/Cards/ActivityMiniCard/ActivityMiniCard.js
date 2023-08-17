import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActivity } from '../../../api/activities'
import { getActivityType } from '../../../api/activityTypes'
import styles from './ActivityMiniCard.module.css'



function ActivityMiniCard({activity}) {
    const [activityExercices, setActivityExercises] = useState([])
    const [activityType, setActivityType] = useState({})
    useEffect(() => {
        getActivity(activity.id)
            .then((res) => {
                setActivityExercises(res.exercises)
            })
            .catch((res) => { })
        if (activity.type) {
            getActivityType(activity.type)
                .then((res) => {setActivityType(res)})
                .catch((res) => {console.log('resres', res);})
        }
        
    }, [activity])

  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
                <Link className={`${styles.card_cell_1} ${'title_outlined'}`} to={`/activity/${activity.id}`}>
                    <p >
                    {activity.name}</p>
                </Link>
            {/* <span className={`${styles.card_cell_2} ${styles.card_cell}`}>
                Info: {activity.description}</span> */}
            {/* <span className={`${styles.card_cell_3} ${styles.card_cell}`}> */}
                {/* Duration: {activity.duration} min</span> */}
                {/* TODO FIX TYPE VISUALIZATION */}
            {/* <span className={`${styles.card_cell_4} ${styles.card_cell}`}> */}
                {/* Type: {activityType.name}</span> */}
            {activity.type === 3 ?
                <>
                    <span className={`${styles.card_cell_5} ${styles.card_cell}`}>
                        Distance: {activity.sets}km</span>
                        {/* TODO pace field in right format 6:10km/h */}
                    <span className={`${styles.card_cell_6} ${styles.card_cell}`}>
                        Pace: {activity.reps}min/km</span>
                    <span className={`${styles.card_cell_7} ${styles.card_cell}`}>
                        Speed: {activity.weights}km/h</span>
                </>
                : <span className={`${styles.card_cell_10} ${styles.card_cell}`}>
                    Exercises: {activityExercices.length !== 0 ?
                    activityExercices.map((ex) => 
                    <span className={`${styles.exer} ${''}`}
                        key={ex.id}
                        ><Link
                        className={`${styles.exer_link}`}
                        to={`/exercise/${ex.id}`}>
                            {ex.name}: {ex.sets}x{ex.reps}
                        </Link>
                            
                    </span>)
                            : null
                }
            </span>    
                }

                {/* TODO Button: "Add Exercise" in activity with any type*/}
            
            {/* <span className={`${styles.card_cell_8} ${styles.card_cell}`}>
                HR: {activity.cues}bpm
            </span>
            <span className={`${styles.card_cell_9} ${styles.card_cell}`}>
                RPE: {activity.rpe}
            </span> */}

            {/* <Link className={`${styles.card_cell_11} ${styles.card_cell} ${styles.card_cell_link}`} 
                to={`/edit-activity/${activity.id}/`}>
                Edit
            </Link>
            <Link className={`${styles.card_cell_12} ${styles.card_cell} ${styles.card_cell_link}`}  
                onClick={() => onDelete(activity.id)}>
                Delete
            </Link> */}

        </div>
    </div>
  )
}

export default ActivityMiniCard
