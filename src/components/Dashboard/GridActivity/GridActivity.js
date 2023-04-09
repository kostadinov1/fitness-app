import styles from './GridActivity.module.css'
import React from 'react'
import { Link } from 'react-router-dom'


function GridActivity({activity}) {

  return (
    <div className={`${styles.li}`}>
        <div className={`${styles.cell} ${styles.cell_1}`}>
            <span className={`${styles.span} `}>
            {activity['start_time']?.slice(5,10)}
            </span>
            <span className={`${styles.units}`}>month/date</span>
        </div>
        <div className={`${styles.cell} ${styles.cell_2}`}>
            <span className={`${styles.span}`}>
            {activity.duration} 
            </span>
            <span className={`${styles.units}`}>minutes</span>
        </div>
        <div className={`${styles.cell} ${styles.cell_3}`}>
            <span className={`${styles.span}`}>
            <Link to={`/activity/${activity.id}/`}>{activity.name}</Link>
            </span>
        </div>
    </div>
  )
}

export default GridActivity
