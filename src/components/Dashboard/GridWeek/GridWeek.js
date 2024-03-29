import React, { useEffect, useState } from 'react'
import { useCurrentWeekNum } from '../../../hooks/useCurrentWeekNum'
import GridDay from '../GridDay/GridDay'
import styles from './GridWeek.module.css'


function GridWeek({activities}) {

    const [mondayData, setMondayData] = useState(undefined)
    const [tuesdayData, setTuesdayData] = useState(undefined)
    const [wednesdayData, setWednesdayData] = useState(undefined)
    const [thursdayData, setThursdayData] = useState(undefined)
    const [fridayData, setFridayData] = useState(undefined)
    const [saturdayData, setSaturdayData] = useState(undefined)
    const [sundayData, setSundayData] = useState(undefined)
    const weekNumber = useCurrentWeekNum()

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


  return (
    <div className={`${styles.dashweek}`}>
        <div className={`${styles.cell} ${styles.cell_1}`}>
            <div className={`${styles.week_day}`}>
                Monday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={mondayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_2}`}>
            <div className={`${styles.week_day}`}>
                Tuesday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={tuesdayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_3}`}>
            <div className={`${styles.week_day}`}>
                Wednesday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={wednesdayData} />
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_4}`}>
            <div className={`${styles.week_day}`}>
                Thursday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={thursdayData} />
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_5}`}>
            <div className={`${styles.week_day}`}>
                Friday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={fridayData} />
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_6}`}>
            <div className={`${styles.week_day}`}>
                Saturday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={saturdayData} />
            </div>
        </div>
        
        <div className={`${styles.cell} ${styles.cell_7}`}>
            <div className={`${styles.week_day}`}>
                Sunday
            </div>
            <div className={`${styles.grid_day}`}>
                <GridDay activities={sundayData} />
            </div>
        </div>


    </div>
  )
}

export default GridWeek
