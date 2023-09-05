
import { Link } from 'react-router-dom'
import styles from './MacroCard.module.css'
import React from 'react'

const MacroCard = (macro) => {
    //TODO fix path to Edit Cycle
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {macro.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            {macro.start_date.slice(5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
            {macro.end_date.slice(5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_4}`}> 
          <button>
            <Link className={`${styles.button}`} to={'/'} >EDIT</Link >
          </button>
        </div>
    </div>
  )
}

export default MacroCard