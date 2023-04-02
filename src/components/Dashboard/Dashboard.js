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
import ActivityCard from "../Activities/AllActivities/ActivityCard/ActivityCard";
import ExerciseCard from "../Exercises/AllExercises/ExerciseCard/ExerciseCard";
import ListCard from "../Cards/ListCard/ListCard";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];


function Dashboard() {
    const [activities, setActivities] = useState([])
    const [exercises, setExercises] = useState([])
    const [profile, setProfile] = useState([])
    const { user, setUser } = useContext(UserContext) 
    console.log('profile in dash' , profile)
    const activitiesCarded = activities.map((activity) => <ActivityMiniCard activity={activity}/>)
    const exercisesCarded = exercises.map((exercise) => <ExerciseCard  exercise={exercise}/>)
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
    }, [])



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
                    <li><Link to={'/'}>Profile</Link></li>
                    <li><Link to={'/'}>Activities</Link></li>
                    <li><Link to={'/'}>Exercises</Link></li>
                    <li><Link to={'/'}>Periodization</Link></li>
                    <li><Link to={'/'}>Cycles</Link></li>
                    <li><Link to={'/'}>Goals</Link></li>
                    <li><Link to={'/'}>Defenders</Link></li>
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
                <h3>Exercises STATS</h3>
                {/* <ListCard /> */}

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
