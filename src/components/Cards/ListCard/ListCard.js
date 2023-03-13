import styles from './ListCard.module.css'
import React from 'react'

function ListCard(item) {
  return (
    <div className={styles.list_card}>
        <ul>
            <li>Activities</li>
            <li>23 Exercises</li>
            <li>1 Macro Cycle</li>
            <li>4 Meso Cycles</li>
            <li>50 Micro Cycles</li>
        </ul>
    </div>
  )
}

export default ListCard
