import React, { useEffect, useState } from 'react'
import { useTodaysDate } from '../../../hooks/useTodaysDate'
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
    const todaysDate = useTodaysDate()

    useEffect(() => {
        setMondayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Monday'))
        setTuesdayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Tuesday'))
        setWednesdayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Wednesday'))
        setThursdayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Thursday'))
        setFridayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Friday'))
        setSaturdayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Saturday'))
        setSundayData(activities.filter((acty) => getWeekDay(acty['start_time']) === 'Sunday'))
    }, [activities])

    const getWeekDay = (date) => {   
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const startYear = date?.slice(0, 4)
        const startDate = date?.slice(5, 7)
        const startMonth = date?.slice(8, 10)
        const newDate = new Date(startYear, startMonth, startDate)
        const day = weekday[newDate.getDay()];
        if (date) {
            return day
        } else {
            return ''
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
