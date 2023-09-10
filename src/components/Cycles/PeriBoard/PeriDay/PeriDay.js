import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'
import PeriActivity from './../PeriActivity/PeriActivity'
import styles from './PeriDay.module.css'
import React from 'react'

function PeriDay({activities}) {

  return (
    <div className={`${styles.peri_day}`}>
        <div></div>
        {activities ?
            activities.map((activity) =>          
                    <div key={activity.id}>
                        <PeriActivity
                            key={activity.id}
                            activity={activity}
                            />
                    </div>)
        :null}
    </div>
  )
}

export default PeriDay
