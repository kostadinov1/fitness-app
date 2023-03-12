import styles from './ActivityCard.module.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { ExperimentOutlined } from '@ant-design/icons'

function ActivityCard({activity}) {
  return (
    <Link to={'/activity/id'}>
    <div className={styles.card}>
        <div className={styles.card_info}>
            <h3>{activity.name}</h3>
            <ul>
                <li>Info: {activity.description}</li>
                <li>Distance: {activity.distance ? activity.distance : 'none'}</li>
                <li>Created on: {activity.created_on.slice(0, 10)}</li>
            </ul>
        </div>
        <div className={styles.card_actions}>
            <div className={styles.card_action}>
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Edit
                </Link>
            </div>
            <div className={styles.card_action}>
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Delete
                </Link>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ActivityCard
