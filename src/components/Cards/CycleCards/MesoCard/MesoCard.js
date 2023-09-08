
import styles from './MesoCard.module.css'
import { DeleteFilled, EditOutlined } from '@ant-design/icons'

const MesoCard = ({meso, onDelete}) => {

  //TODO fix path to Edit Cycle

  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {meso.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
        <div className={`${styles.mmdd_box}`}>
                <span>mm/</span>
                <span>dd</span>
            </div> 
            {meso.start_date.slice(5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
        <div className={`${styles.mmdd_box}`}>
                <span>mm/</span>
                <span>dd</span>
            </div> 
            {meso.end_date.slice(5)}
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