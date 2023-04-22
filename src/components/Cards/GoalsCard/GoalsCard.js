
import styles from './GoalsCard.module.css'
import React from 'react'

function GoalsCard({goals}) {
  return (
    <ol className={`${styles.card_ul}`}>
        {goals.length > 0 ? 
          goals.map((goal) => 
            <li className={`${styles.li}`}> {goal.name}</li>)
        : <p className={`${styles.p}`}>No Goals Yet</p>}
    </ol>
  )
}

export default GoalsCard 
