import AddIconListPlaceholder from '../../../Cards/AddToListPlaceholder/AddToListPlaceholder'
import PeriActivity from './../PeriActivity/PeriActivity'
import styles from './PeriDay.module.css'
import React from 'react'

function PeriDay({activities}) {

  return (
    <div className={`${styles.peri_day}`}>
        {activities ?
            activities.map((activity) =>          
                    <div key={activity.id}>
                        <PeriActivity
                            key={activity.id}
                            activity={activity}
                            />
                        <AddIconListPlaceholder activity={activity} type={'activity'} />
                    </div>)
        :<AddIconListPlaceholder  type={'activity'} />}
    </div>
  )
}

export default PeriDay
