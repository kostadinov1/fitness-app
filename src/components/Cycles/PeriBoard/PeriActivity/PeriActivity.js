
import { Link } from 'react-router-dom'
import styles from './PeriActivity.module.css'
import React from 'react'
import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'



const PeriActivity = ({activity, dispatch}) => {

    console.log('PeriActivity', activity);
    
  return (
    <div className={`${styles.peri_activity}`}>
    <Link to={`/edit-activity/${activity.id}`} className={`${styles.activity_title}`} >
        {activity.name}
    </Link>
    <div className={`${styles.exercise_box}`}>
        {activity  ?
            activity?.exercises?.map((exercise) => 
                <div className={`${styles.exercise}`} key={exercise.id} >
                    <div className={`${styles.exercise_title}`}>
                        {exercise.name}:
                    </div>
                    <div className={`${styles.exercise_stats}`}>
                        <div>sets:{exercise.sets}</div>
                        <div>reps x {exercise.reps}  </div>
                    </div>                            
                </div>)
        : null}
    </div>
    <AddIconListPlaceholder  itemType={'exercise'} dispatch={dispatch}/>
</div>
  )
}

export default PeriActivity