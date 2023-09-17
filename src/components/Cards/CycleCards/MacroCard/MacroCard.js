
import { Link } from 'react-router-dom'
import styles from './MacroCard.module.css'
import React from 'react'
import { DeleteFilled, EditOutlined } from '@ant-design/icons'
import { useTransformDate } from '../../../../hooks/useTransformDate'

const MacroCard = ({macro, onDelete}) => {
    const startDate = useTransformDate(macro.start_date)
    const endDate = useTransformDate(macro.end_date)
    
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {macro.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            <div className={`${styles.mmdd_box}`}>
                <span>mm -</span>
                <span> yy</span>
            </div> 
            {startDate?.slice(3)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}>
            <div className={`${styles.mmdd_box}`}>
            <span>mm -</span>
                <span> yy</span>
            </div> 
            {endDate?.slice(3)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_4}`}> 
          <button className={`${styles.button}`}>
            <Link to={`/edit-macro-cycle/${macro.id}`} ><EditOutlined/></Link >
          </button>
        </div>
        <div className={`${styles.cycle} ${styles.cycle_5}`}> 
          <button onClick={onDelete} className={`${styles.button}`}>
            <DeleteFilled />
          </button>
        </div>
    </div>
  )
}

export default MacroCard