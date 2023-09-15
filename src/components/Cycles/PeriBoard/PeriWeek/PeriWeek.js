import { useEffect, useState } from "react"
import styles from './PeriWeek.module.css'
import {useCurrentWeekNum} from './../../../../hooks/useCurrentWeekNum'
import AddIconListPlaceholder from "../../../Cards/AddToListPlaceholder/AddToListPlaceholder"
import PeriActivity from "../PeriActivity/PeriActivity"


// activities should be sorted by mesocycle

function PeriWeek({activities}) {
    // const weekNumber = useCurrentWeekNum()

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
        const days = Math.floor((activityDay - startOfYear) / (24 * 60 * 60 * 1000));
        // const currentWeekNumber = Math.ceil(days / 7);
        // if (activityDate &&  (weekNumber === currentWeekNumber) ) {

        if (activityDate ) {
            return activityDayNum.getDay()
        } else {
            return undefined
        }
    }
    // console.log('START', activities, 'activities in PERIWEEK')

  return (
    <div className={`${styles.periweek}`}>
        <div className={`${styles.cell} ${styles.cell_1}`}>
            <div className={`${styles.week_day}`}>
                Monday
            </div>
            <div className={`${styles.grid_day}`}>
                {mondayData?.length > 0 ? 
                    mondayData.map((activity) =>          
                        <div key={activity.id}>
                            <PeriActivity
                                key={activity.id}
                                activity={activity}
                                />
                        </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_2}`}>
            <div className={`${styles.week_day}`}>
                Tuesday
            </div>
            <div className={`${styles.grid_day}`}>
            {tuesdayData?.length > 0 ? 
                tuesdayData.map((activity) =>          
                    <div key={activity.id}>
                        <PeriActivity
                            key={activity.id}
                            activity={activity}
                            />
                    </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_3}`}>
            <div className={`${styles.week_day}`}>
                Wednesday
            </div>
            <div className={`${styles.grid_day}`}>
            {wednesdayData?.length > 0 ? 
                wednesdayData.map((activity) =>          
                <div key={activity.id}>
                    <PeriActivity
                        key={activity.id}
                        activity={activity}
                        />
                </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>
        <div className={`${styles.cell} ${styles.cell_4}`}>
            <div className={`${styles.week_day}`}>
                Thursday
            </div>
            <div className={`${styles.grid_day}`}>
            {thursdayData?.length > 0 ? 
                thursdayData.map((activity) =>          
                <div key={activity.id}>
                    <PeriActivity
                        key={activity.id}
                        activity={activity}
                        />
                </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>
        weekNumber
        <div className={`${styles.cell} ${styles.cell_5}`}>
            <div className={`${styles.week_day}`}>
                Friday
            </div>
            <div className={`${styles.grid_day}`}>
            {fridayData?.length > 0 ? 
                fridayData.map((activity) =>          
                <div key={activity.id}>
                    <PeriActivity
                        key={activity.id}
                        activity={activity}
                        />
                </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>

        <div className={`${styles.cell} ${styles.cell_6}`}>
            <div className={`${styles.week_day}`}>
                Saturday
            </div>
            <div className={`${styles.grid_day}`}>
            {saturdayData?.length > 0 ? 
                saturdayData.map((activity) =>          
                <div key={activity.id}>
                    <PeriActivity
                        key={activity.id}
                        activity={activity}
                        />
                </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>
        
        <div className={`${styles.cell} ${styles.cell_7}`}>
            <div className={`${styles.week_day}`}>
                Sunday
            </div>
            <div className={`${styles.grid_day}`}>
            {sundayData?.length > 0 ? 
                sundayData.map((activity) =>          
                <div key={activity.id}>
                    <PeriActivity
                        key={activity.id}
                        activity={activity}
                        />
                </div>)
                : <AddIconListPlaceholder type={'activity'} />}
            </div>
        </div>


    </div>
  )
}

export default PeriWeek
