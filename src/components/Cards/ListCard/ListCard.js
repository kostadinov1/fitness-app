import styles from './ListCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function ListCard(item) {
  return (
<div className={styles.list_card}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to={'/all-exercises'}>Exercises</Link></li>
                    <li><Link to={'/create-exercise'}>Create Exercise</Link></li>
                    <li><Link to={'/all-activities'}>Activities</Link></li>
                    <li><Link to={'/create-activity'}>Create Activity</Link></li>
                    <li><Link to={`/profile/$£{user.id}`}>Profile</Link></li>
                </ul>
            </div>
  )
}

export default ListCard
