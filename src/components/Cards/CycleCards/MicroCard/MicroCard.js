import { useTransformDate } from '../../../../hooks/useTransformDate'
import styles from './MicroCard.module.css'
import React from 'react'


function MicroCard({cycle}) {
    const startDate = useTransformDate(cycle.start_date)
    const endDate = useTransformDate(cycle.end_date)
    return (
        <div  className={`${styles.cycle_card}`}>
            <div className={`${styles.cycle} ${styles.cycle_1}`}> 
                {cycle.name}
            </div>
            <div className={`${styles.cycle} ${styles.cycle_2}`}> 
                <div></div>
                {startDate?.slice(0, 5)}
                <div className={`${styles.mmdd_box}`}>
                    <span>dd -</span>
                    <span> mm</span>
                </div> 
            </div>
            <div className={`${styles.cycle} ${styles.cycle_3}`}> 
                {endDate?.slice(0, 5)}
                <div className={`${styles.mmdd_box}`}>
                    <span>dd -</span>
                    <span> mm</span>
                </div> 
            </div>
      </div>
    )
  }

export default MicroCard
