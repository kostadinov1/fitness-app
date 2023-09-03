import PeriActivity from './../PeriActivity/PeriActivity'
import styles from './PeriDay.module.css'
import React from 'react'

function PeriDay({activities}) {

  return (
    <div className={`${styles.peri_day}`}>
      {activities ?
         activities.map((activity) => 
                <PeriActivity 
                    key={activity.id}
                    activity={activity}
                    />)
       :null}
     </div>
  )
}

export default PeriDay
