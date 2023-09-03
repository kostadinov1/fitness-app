import styles from './CycleCard.module.css'
import React from 'react'


function CycleCard({cycle}) {
    // console.log(cycle, 'cycle in card');
  return (
    <div className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {cycle.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            {cycle.start_date}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
            {cycle.end_date}
        </div>
    </div>
  )
}

export default CycleCard
