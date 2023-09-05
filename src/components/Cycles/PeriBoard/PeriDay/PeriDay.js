import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'
import PeriActivity from './../PeriActivity/PeriActivity'
import styles from './PeriDay.module.css'
import React from 'react'

function PeriDay({activities}) {

  return (
    <div className={`${styles.peri_day}`}>
      {activities ?
         activities.map((activity) => 
         
       <div>
            <PeriActivity
                key={activity.id}
                activity={activity}
                />
            <AddIconListPlaceholder type={'exercise'} />
        </div>)
       :<AddIconListPlaceholder type={'exercise'} />}
     </div>
  )
}

export default PeriDay
