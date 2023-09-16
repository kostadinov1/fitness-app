
import { useTransformDate } from '../../../../hooks/useTransformDate'
import styles from './MesoCard.module.css'
import { DeleteFilled, EditOutlined } from '@ant-design/icons'

const MesoCard = ({meso, onDelete}) => {

  //TODO fix path to Edit Cycle
  const startDate = useTransformDate(meso.start_date)
  const endDate = useTransformDate(meso.end_date)
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {meso.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
        <div className={`${styles.mmdd_box}`}>
                <span>dd -</span>
                <span> mm</span>
            </div> 
            {startDate?.slice(0, 5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
        <div className={`${styles.mmdd_box}`}>
                <span>dd -</span>
                <span> mm</span>
            </div> 
            {endDate?.slice(0, 5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_4}`}> 
          <button className={`${styles.button}`}>
                <EditOutlined/>
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
export default MesoCard