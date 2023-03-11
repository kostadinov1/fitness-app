import styles from './ActivityCard.module.css'

import React from 'react'
import { Link } from 'react-router-dom'

function ActivityCard({activity}) {
  return (
    <Link to={'/activity/id'}>
    <div className={styles.card}>
        {activity.image ? <img src={activity.image} alt=''></img> : <img  alt=''></img>}
        <div className={styles.card_info}>
            <ul>
                <li>Name: {activity.name}</li>
                <li>Info: {activity.description}</li>
                <li>Distance: {activity.distance}</li>
                <li>Created On: {activity.created_on}</li>
            </ul>
        </div>
        <div className={styles.card_actions}>

        </div>
    </div>
    </Link>
  )
}

export default ActivityCard
