
import styles from './PeriActivity.module.css'
import React from 'react'



const PeriActivity = ({activity}) => {
    console.log(activity.exercises, 'activity exercises');
  return (
    <div className={`${styles.peri_activity}`}>
      {activity ?
         activity.exercises.map((exercise) => 
                <p key={exercise.id}> {exercise.name} </p>)
       :null}
    </div>
  )
}

export default PeriActivity