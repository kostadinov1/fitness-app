
import { Link } from 'react-router-dom'
import styles from './PeriActivity.module.css'
import React from 'react'
import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'



const PeriActivity = ({activity}) => {
    // console.log(activity, 'activity exercises');
    //TODO attach
    //TODO add weekly incrementation functionality for REPS AND SETS when creating meso periodization
  return (
    <div className={`${styles.peri_activity}`}>
        <Link to={`/edit-activity/${activity.id}`} className={`${styles.activity_title}`} >{activity.name}</Link>
        <div className={`${styles.exercise_box}`}>
            {activity  ?
                activity?.exercises?.map((exercise) => 
                    <div className={`${styles.exercise_title}`}
                        key={exercise.id}
                        >
                            {exercise.name}: {exercise.reps} reps x {exercise.sets} sets

                        <AddIconListPlaceholder item={exercise} type={'exercise'}/>
                            
                    </div>)
            :<AddIconListPlaceholder item={activity} type={'activity'}/>}
        </div>
    </div>
  )
}

export default PeriActivity