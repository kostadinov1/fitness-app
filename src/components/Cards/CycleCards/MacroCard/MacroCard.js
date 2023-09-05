
import { Link } from 'react-router-dom'
import styles from './MacroCard.module.css'
import React from 'react'
import { DeleteFilled, EditOutlined } from '@ant-design/icons'

const MacroCard = ({macro}) => {
    //TODO fix path to Edit Cycle
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {macro.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            <div className={`${styles.mmdd_box}`}>
                <span>yy/</span>
                <span>mm</span>
            </div> 
            {macro?.start_date?.slice(0, 7)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}>
            <div className={`${styles.mmdd_box}`}>
                <span>yy</span>
                <span>mm/</span>
            </div> 
            {macro?.end_date?.slice(0, 7)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_4}`}> 
          <button>
            <Link className={`${styles.button}`} to={`/edit-macro-cycle/${macro.id}`} ><EditOutlined/></Link >
          </button>
        </div>
        <div className={`${styles.cycle} ${styles.cycle_5}`}> 
          <button>
            <Link className={`${styles.button}`} to={`/delete-macro-cycle/${macro.id}`} ><DeleteFilled /></Link >
          </button>
        </div>
    </div>
  )
}

export default MacroCard