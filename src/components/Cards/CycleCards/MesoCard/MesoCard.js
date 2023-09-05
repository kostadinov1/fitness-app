
import { Link } from 'react-router-dom'
import styles from './MesoCard.module.css'

const MesoCard = ({meso}) => {
    
  //TODO fix path to Edit Cycle
  return (
    <div  className={`${styles.cycle_card}`}>
        <div className={`${styles.cycle} ${styles.cycle_1}`}> 
            {meso.name}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_2}`}> 
            {meso.start_date.slice(5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_3}`}> 
            {meso.end_date.slice(5)}
        </div>
        <div className={`${styles.cycle} ${styles.cycle_4}`}> 
          <button>
            <Link className={`${styles.button}`} to={'/'} >EDIT</Link >
          </button>
        </div>
    </div>
  )
}
export default MesoCard