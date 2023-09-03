import "react-alice-carousel/lib/alice-carousel.css";
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllActivities } from '../../../api/activities'
import { getAllExercises } from '../../../api/exercises'
import { getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { getProfile } from '../../../api/profile'
import { UserContext } from '../../../contexts/UserContext'
import CardReel from '../Cards/CardReel/CardReel'
import styles from './Dashboard.module.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import ActivityMiniCard from "../Cards/ActivityMiniCard/ActivityMiniCard";
import ExerciseCard from "../../Exercises/AllExercises/ExerciseCard/ExerciseCard";
import GridWeek from "../GridWeek/GridWeek";
import ListCard from "../Cards/ListCard/ListCard";
import { useTodaysDate } from "../../../hooks/useTodaysDate";
import { getAllGoals } from "../../../api/goals";
import GoalsCard from "../Cards/GoalsCard/GoalsCard";
import PieMacroChart from "../../NivoCharts/PieMacroChart/PieMacroChart";
import ActivityCalendar from "../../NivoCharts/ActivityCalendar";
import { useCurrentWeekNum } from "../../../hooks/useCurrentWeekNum";
const handleDragStart = (e) => e.preventDefault();


function Dashboard() {
    const [todaysDate, setTodaysDate] = useTodaysDate()
    const weekNumber = useCurrentWeekNum()
    const [macroCycles, setMacroCycles] = useState([])
    const [activities, setActivities] = useState([])
    const [exercises, setExercises] = useState([])
    const [goals, setGoals] = useState([])
    const { user } = useContext(UserContext) 
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        address: null,
        dob: null, 
        gender: null,
        
    })
    const activitiesCarded = activities?.map((activity) => <ActivityMiniCard activity={activity} onDragStart={handleDragStart} role="presentation" />)
    const exercisesCarded = exercises?.map((exercise) => <ExerciseCard  exercise={exercise} onDragStart={handleDragStart} role="presentation" />)

    useEffect(() => {
        getAllExercises(user)
            .then((res) => {
                setExercises(res)
            })
            .catch((res) => {
            })
        getAllActivities(user)
            .then((res) => {
                setActivities(res)
            })
            .catch((res) => {
            })
        getProfile(user)
            .then((res) => {
                setProfile(res)
            })
            .catch((res) => {
            })
        getAllGoals(user)
            .then((res) => {setGoals(res)})
            .catch((res) => {})
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})
        
        }, [user])

  return (
    <section className={styles.dashboard}>
        <div className={styles.grid}>
            <div className={`${styles.grid_card} ${styles.grid_card_1}`}>
                {profile?.image_local ?
                 <img src={`${profile.image_local}`} alt='' /> :
                  <img src='/images/defaults/default-user.png' alt='' />}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_2}`}>
                    <ListCard></ListCard>
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_3}`}>
                <h3>Everyday</h3>
                    {activities ? (activities.filter((act) => act.name === 'Everyday')
                    .map((act) => <ActivityMiniCard key={act.id} activity={act}/>)) :
                    <p>Name an Activity "Everyday" and it will show up here.</p>}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_4}`}>
                <h3>Goals</h3>
                    <GoalsCard goals={goals} />
                {/* <img src='/images/backgrounds/background-01.jpg' alt='' /> */}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_5}`}>
                <h3>{profile ? profile.first_name : null} {profile.last_name}</h3>
                <ul>
                    <li>Name: {profile.first_name} {profile.last_name}</li>
                    <li>DOB: {profile.dob}</li>
                    <li>Phone: {profile.phone}</li>
                    <li>Email: {user.email}</li>
                    <li>Gender: {profile.gender}</li>
                    <li>Prime Sport: All In One</li>
                </ul>
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_6}`}>
                <h3>Activities</h3>
                <AliceCarousel mouseTracking items={activitiesCarded} />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_7}`}>
                <h3>Exercises</h3>
                <AliceCarousel mouseTracking items={exercisesCarded} />

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_8}`}>
                <h3>Week #{weekNumber} Schedule</h3>
                <GridWeek activities={activities}></GridWeek>

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_9}`}>
                <h3>Blocks STATS</h3>
                {macroCycles.length > 0 ? 
                macroCycles.map((cycle) => <PieMacroChart key={cycle.id} macroCycle={cycle} />)
                : null}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_10}`}>
                <h3>BLOCKS</h3>
                    <CardReel />
            </div>
        </div>
        <div className={`${styles.activity_calendar_box} ${styles.grid_card} ${styles.grid_card_11}`}>
            <h3>Year Calendar</h3>

            <ActivityCalendar activities={activities} />
        </div>
    </section>
  )
}

export default Dashboard