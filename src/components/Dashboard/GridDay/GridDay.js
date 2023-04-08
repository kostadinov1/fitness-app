import React from 'react'
import GridActivity from '../GridActivity/GridActivity'
import styles from './GridDay.module.css'

function GridDay({activities}) {

  return (
    <div className={`${styles.grid_day}`}>
      {activities ?
         activities.map((activity) => 
                <GridActivity 
                    key={activity.id}
                    activity={activity}
                    />)
       :null}
     </div>
  )
}

export default GridDay
