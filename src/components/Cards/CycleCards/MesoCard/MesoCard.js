
import styles from './MesoCard.module.css'

const MesoCard = ({meso}) => {
    
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {meso.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            {meso.start_date}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
            {meso.end_date}
        </div>
    </div>
  )
}

export default MesoCard