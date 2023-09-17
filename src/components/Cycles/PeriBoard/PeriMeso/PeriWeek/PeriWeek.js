import { useEffect, useState } from "react"
import styles from './PeriWeek.module.css'
import  PeriDay  from './../PeriDay/PeriDay'
import {useCurrentWeekNum} from './../../../../hooks/useCurrentWeekNum'
import AddIconListPlaceholder from "../../../Cards/AddToListPlaceholder/AddToListPlaceholder"



// activities should be sorted by mesocycle

function PeriWeek({activities}) {
    // console.log('START', activities, 'activities in PERIWEEK')
    const weekNumber = useCurrentWeekNum()

    const [mondayData, setMondayData] = useState(undefined)
    const [tuesdayData, setTuesdayData] = useState(undefined)
    const [wednesdayData, setWednesdayData] = useState(undefined)
    const [thursdayData, setThursdayData] = useState(undefined)
    const [fridayData, setFridayData] = useState(undefined)
    const [saturdayData, setSaturdayData] = useState(undefined)
    const [sundayData, setSundayData] = useState(undefined)

    useEffect(() => {
        setMondayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 1))
        setTuesdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 2))
        setWednesdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 3))
        setThursdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 4))
        setFridayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 5))
        setSaturdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 6))
        setSundayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 0))
    }, [activities])

    const getWeekDay = (activityDate) => {  
        const activityDayNum = new Date(activityDate)
            // get current week number
        const currentDate = new Date();
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
        const activityDay = new Date(activityDate)
        const days = Math.floor((activityDay - startOfYear) /
            (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil(days / 7);

        if (activityDate &&  (weekNumber === currentWeekNumber) ) {
            return activityDayNum.getDay()
        } else {
            return undefined
        }
    }
    // console.log('START', mondayData, 'activities in PERIWEEK')

  return (
    <div className={`${styles.periweek}`}>
        <div className={`${styles.cell} ${styles.cell_1}`}>
            <div className={`${styles.week_day}`}>
                Monday
            </div>
            <div className={`${styles.grid_day}`}>
                {mondayData ? 
                    <div>

                        <PeriDay key={'1'} activities={mondayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_2}`}>
            <div className={`${styles.week_day}`}>
                Tuesday
            </div>
            <div className={`${styles.grid_day}`}>
            {tuesdayData ? 
                    <div>

                        <PeriDay key={'2'} activities={tuesdayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_3}`}>
            <div className={`${styles.week_day}`}>
                Wednesday
            </div>
            <div className={`${styles.grid_day}`}>
            {wednesdayData ? 
                    <div>

                        <PeriDay key={'3'} activities={wednesdayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_4}`}>
            <div className={`${styles.week_day}`}>
                Thursday
            </div>
            <div className={`${styles.grid_day}`}>
            {thursdayData ? 
                    <div>

                        <PeriDay key={'4'} activities={thursdayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_5}`}>
            <div className={`${styles.week_day}`}>
                Friday
            </div>
            <div className={`${styles.grid_day}`}>
            {fridayData ? 
                    <div>

                        <PeriDay key={'5'} activities={fridayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_6}`}>
            <div className={`${styles.week_day}`}>
                Saturday
            </div>
            <div className={`${styles.grid_day}`}>
            {saturdayData ? 
                    <div>

                        <PeriDay key={'6'} activities={saturdayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>
        
        <div className={`${styles.cell} ${styles.cell_7}`}>
            <div className={`${styles.week_day}`}>
                Sunday
            </div>
            <div className={`${styles.grid_day}`}>
            {sundayData ? 
                    <div>

                        <PeriDay key={'7'} activities={sundayData} />
                        <AddIconListPlaceholder type={'activity'}/>
                    </div>
                
                : null}
            </div>
        </div>


    </div>
  )
}

export default PeriWeek