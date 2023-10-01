import { useEffect, useReducer, useState } from "react"
import styles from './PeriWeek.module.css'
import AddIconListPlaceholder from "../../../Cards/AddToListPlaceholder/AddToListPlaceholder"
import { Link, useNavigate } from "react-router-dom"
import CreateActivityModal from "../../../Activities/CreateActivityModal/CreateActivityModal"
import PeriActivity from "../PeriActivity/PeriActivity"
import CreateExerciseModal from "../../../Exercises/CreateExerciseModal/CreateExerciseModal"


function PeriWeek({activities, selectedMicro, setSelectedMicro}) {
    const navigate = useNavigate()

    const [mondayData, setMondayData] = useState(undefined)
    const [tuesdayData, setTuesdayData] = useState(undefined)
    const [wednesdayData, setWednesdayData] = useState(undefined)
    const [thursdayData, setThursdayData] = useState(undefined)
    const [fridayData, setFridayData] = useState(undefined)
    const [saturdayData, setSaturdayData] = useState(undefined)
    const [sundayData, setSundayData] = useState(undefined)
    const [ showCreateActivityModal,setShowCreateActivityModal] = useState(false)

    const [ showEditActivityModal,setShowEditActivityModal] = useState(false)

    const [ showCreateExerciseModal,setShowCreateExerciseModal] = useState(false)
    const [selectedDay, setSelectdDay] = useState(1)// monday
    const [selectedActivity, setSelectedActivity] = useState({})
    const [state, dispatch] = useReducer(reducer, false)
    
        // Reducer to Show / Hide Modals
    function reducer(state, action) {
        switch (action.type){
            case 'activity':
                return showCreateActivityModal ? setShowCreateActivityModal(false) : setShowCreateActivityModal(true)
            case 'exercise':
                setSelectedActivity(action.payload)
                return showCreateExerciseModal ? setShowCreateExerciseModal(false) : setShowCreateExerciseModal(true)
            case 'tollgeEditActivityModal':
                console.log(action.payload)    
            navigate(`/edit-activity/${action.payload.name}`)

                break;
                // return showEditActivityModal ? setShowEditActivityModal(false) : setShowCreateActivityModal(true)
            default:
                return state
        }
    }
    // Set Activities by Day of the Week
    useEffect(() => {
        setMondayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 1))
        setTuesdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 2))
        setWednesdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 3))
        setThursdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 4))
        setFridayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 5))
        setSaturdayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 6))
        setSundayData(activities?.filter((acty) => getWeekDay(acty['start_time']) === 0))
    }, [activities])

    function getWeekDay(activityDate) {  
        const activityDayNum = new Date(activityDate)
        return activityDayNum?.getDay()
    }


  return (
    <div className={`${styles.periweek}`}>
            {showCreateActivityModal ? 
                <CreateActivityModal 
                    setShowCreateActivityModal={setShowCreateActivityModal} 
                    selectedMicro={selectedMicro}
                    setSelectedMicro={setSelectedMicro}
                    selectedDay={selectedDay}
                    />
            : null}

{showCreateExerciseModal ? 
                <CreateExerciseModal 
                    setShowCreateExerciseModal={setShowCreateExerciseModal} 
                    selectedActivity={selectedActivity}
                    />
            : null}
        <div onClick={() => setSelectdDay(1)} className={`${styles.cell} ${styles.cell_1}`}>
            <div className={`${styles.week_day}`}>MONADAY</div>
            <div className={`${styles.grid_day}`}>

                {mondayData?.length > 0 ? 
                    mondayData.map((activity) =>                       
                        <PeriActivity 
                            key={activity.id}
                            activity={activity}
                            dispatch={dispatch}
                        />)
                        : null}
                <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div  onClick={() => setSelectdDay(2)} className={`${styles.cell} ${styles.cell_2}`}>
            <div className={`${styles.week_day}`}>TUESDAY</div>
            <div className={`${styles.grid_day}`}>
            {tuesdayData?.length > 0 ? 
                tuesdayData.map((activity) =>                    
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div onClick={() => setSelectdDay(3)} className={`${styles.cell} ${styles.cell_3}`}>
            <div className={`${styles.week_day}`}>WEDNESDAY</div>
            <div className={`${styles.grid_day}`}>
            {wednesdayData?.length > 0 ? 
                wednesdayData.map((activity) => 
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                    <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div onClick={() => setSelectdDay(4)} className={`${styles.cell} ${styles.cell_4}`}>
            <div className={`${styles.week_day}`}>THURSDAY</div>
            <div className={`${styles.grid_day}`}>
            {thursdayData?.length > 0 ? 
                thursdayData.map((activity) => 
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div onClick={() => setSelectdDay(5)} className={`${styles.cell} ${styles.cell_5}`}>
            <div className={`${styles.week_day}`}>FRIDAY</div>
            <div className={`${styles.grid_day}`}>
            {fridayData?.length > 0 ? 
                fridayData.map((activity) => 
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                    <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div onClick={() => setSelectdDay(6)} className={`${styles.cell} ${styles.cell_6}`}>
            <div className={`${styles.week_day}`}>SATURDAY</div>
            <div className={`${styles.grid_day}`}>
            {saturdayData?.length > 0 ? 
                saturdayData.map((activity) => 
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>

        <div onClick={() => setSelectdDay(7)} className={`${styles.cell} ${styles.cell_7}`}>
            <div className={`${styles.week_day}`}>SUNDAY</div>
            <div className={`${styles.grid_day}`}>
            {sundayData?.length > 0 ? 
                sundayData.map((activity) => 
                    <PeriActivity 
                        key={activity.id}
                        activity={activity}
                        dispatch={dispatch}
                    />)
                : null}
                <AddIconListPlaceholder itemType={'activity'} dispatch={dispatch}/>
            </div>
        </div>
    </div>
  )
}

export default PeriWeek
