
import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'
import styles from './PeriActivity.module.css'
import React from 'react'


const PeriActivity = ({activity, dispatch}) => {

    return (
        <div className={`${styles.peri_activity}`}>
            <button onClick={() => dispatch({type: 'tollgeEditActivityModal'})} className={`${styles.activity_title}`} >
                {activity.name}
            </button>
            <div className={`${styles.exercise_box}`}>
                {activity?.exercises  ?
                    activity?.exercises?.map((exercise) => 
                        <div className={`${styles.exercises}`} key={exercise.id} >
                            <div className={`${styles.exercise_title}`}>
                                {exercise.name}:
                            </div>
                            <div className={`${styles.exercise_stats}`}>
                                <div>sets:{exercise?.sets}</div>
                                <div>reps x {exercise?.reps}  </div>
                                <div>kgs x {exercise?.reps}  </div>
                            </div>                            
                        </div>)
                : <AddIconListPlaceholder itemType={'exercise'} dispatch={dispatch}/>}
                {/* <AddIconListPlaceholder itemType={'exercise'} dispatch={dispatch}/> */}
            </div>
        </div>
    )
}

export default PeriActivity




