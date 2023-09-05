
import styles from './PeriActivity.module.css'
import React from 'react'



const PeriActivity = ({activity}) => {
    // console.log(activity, 'activity exercises');
  return (
    <div className={`${styles.peri_activity}`}>
      <div className={`${styles.activity_title}`} >{activity.name}</div>
      <div className={`${styles.exercise_box}`}>
        {activity ?
            activity?.exercises?.map((exercise) => 
                    <div
                        className={`${styles.exercise_title}`}
                        key={exercise.id}>
                             {exercise.name}: {exercise.reps} reps x {exercise.sets} sets
                    </div>)
        :null}
      </div>
    </div>
  )
}

export default PeriActivity