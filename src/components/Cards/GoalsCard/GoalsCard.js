
import styles from './GoalsCard.module.css'
import React from 'react'

function GoalsCard({goals}) {
  return (
    <ol className={`${styles.card_ul}`}>
        {goals.length > 0 ? 
          goals.map((goal) => 
          <div key={goal.id} className={`${styles.div}`}>
            <li className={`${styles.li}`}> {goal.name}:  {goal.description}; </li>
            <span className={`${styles.deadline}`}>Deadline: {goal.deadline};</span>
          </div >)
        : <p className={`${styles.p}`}>No Goals Yet</p>}
    </ol>
  )
}

export default GoalsCard 
