
import styles from './PeriActivity.module.css'
import React from 'react'



const PeriActivity = ({activity}) => {
    console.log(activity, 'activity exercises');
  return (
    <div className={`${styles.peri_activity}`}>
      <h3>{activity.name}</h3>
      {activity ?
         activity?.exercises?.map((exercise) => 
                <p key={exercise.id}> {exercise.name} </p>)
       :null}
    </div>
  )
}

export default PeriActivity