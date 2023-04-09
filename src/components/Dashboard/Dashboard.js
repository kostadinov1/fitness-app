import "react-alice-carousel/lib/alice-carousel.css";
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllActivities } from '../../api/activities'
import { getAllExercises } from '../../api/exercises'
import { getProfile } from '../../api/profile'
import { UserContext } from '../../contexts/UserContext'
import CardReel from '../Cards/CardReel/CardReel'
import styles from './Dashboard.module.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import ActivityMiniCard from "../Cards/ActivityMiniCard/ActivityMiniCard";
import ExerciseCard from "../Exercises/AllExercises/ExerciseCard/ExerciseCard";
import { AimOutlined, CalendarFilled, DeploymentUnitOutlined, FireFilled, HeatMapOutlined, SyncOutlined, UserOutlined } from "@ant-design/icons";
import GridWeek from "./GridWeek/GridWeek";

const handleDragStart = (e) => e.preventDefault();

function Dashboard() {
    const [activities, setActivities] = useState([])
    const [exercises, setExercises] = useState([])
    const [profile, setProfile] = useState([])
    const { user } = useContext(UserContext) 

    const activitiesCarded = activities.map((activity) => <ActivityMiniCard activity={activity} onDragStart={handleDragStart} role="presentation" />)
    const exercisesCarded = exercises.map((exercise) => <ExerciseCard  exercise={exercise} onDragStart={handleDragStart} role="presentation" />)

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
    }, [user])


  return (
    <section className={styles.dashboard}>
        <div className={styles.grid}>
            <div className={`${styles.grid_card} ${styles.grid_card_1}`}>
                {profile.image_local ?
                 <img src={`${profile.image_local}`} alt='' /> :
                  <img src='/images/defaults/default-user.png' alt='' />}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_2}`}>
                <p>Quick Links</p>
                <ul>
                    <li><Link to={'/profile'}><UserOutlined /> Profile</Link></li>
                    <li><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
                    <li><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
                    <li><Link to={'/periodization'}><CalendarFilled /> Periodization</Link></li>
                    <li><Link to={'/cycles'}><SyncOutlined /> Cycles</Link></li>
                    <li><Link to={'/goals'}><AimOutlined /> Goals</Link></li>
                    <li><Link to={'/defenders'}><HeatMapOutlined /> Defenders</Link></li>
                </ul>
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_3}`}>
                <h3>RECORDS</h3>
                {/* <ListCard /> */}
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_4}`}>
                <h3>CHARTS</h3>
                <img src='/images/backgrounds/background-01.jpg' alt='' />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_5}`}>
                <h3>{profile.first_name} {profile.last_name}</h3>
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
                <h3>Week Schedual</h3>
                <GridWeek activities={activities}></GridWeek>

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_9}`}>
                <h3>Blocks STATS</h3>
                {/* <ListCard /> */}

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_10}`}>
                <h3>BLOCKS</h3>
                    <CardReel />
            </div>
        </div>
    </section>
  )
}

export default Dashboard
