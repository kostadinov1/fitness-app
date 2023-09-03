import { useState } from "react"
import styles from './PeriWeek.module.css'
import  PeriDay  from './../PeriDay/PeriDay'

// activities should be sorted by mesocycle
function PeriWeek({activities}) {

    const [mondayData, setMondayData] = useState(undefined)
    const [tuesdayData, setTuesdayData] = useState(undefined)
    const [wednesdayData, setWednesdayData] = useState(undefined)
    const [thursdayData, setThursdayData] = useState(undefined)
    const [fridayData, setFridayData] = useState(undefined)
    const [saturdayData, setSaturdayData] = useState(undefined)
    const [sundayData, setSundayData] = useState(undefined)

    console.log(activities, 'activities in periweek')


  return (
    <div className={`${styles.periweek}`}>
        <div className={`${styles.cell} ${styles.cell_1}`}>
            <div className={`${styles.week_day}`}>
                Monday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={mondayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_2}`}>
            <div className={`${styles.week_day}`}>
                Tuesday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={tuesdayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_3}`}>
            <div className={`${styles.week_day}`}>
                Wednesday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={wednesdayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_4}`}>
            <div className={`${styles.week_day}`}>
                Thursday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={thursdayData} />
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_5}`}>
            <div className={`${styles.week_day}`}>
                Friday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={fridayData} />
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_6}`}>
            <div className={`${styles.week_day}`}>
                Saturday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={saturdayData} />
            </div>
        </div>
        
        <div className={`${styles.cell} ${styles.cell_7}`}>
            <div className={`${styles.week_day}`}>
                Sunday
            </div>
            <div className={`${styles.grid_day}`}>
                <PeriDay activities={sundayData} />
            </div>
        </div>


    </div>
  )
}

export default PeriWeek
