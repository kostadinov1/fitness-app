import React, { useContext, useEffect, useState } from 'react'
import { getAllActivities } from '../../../api/activities'
import { getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { getAllMicroCycles } from '../../../api/cycles/microCycle'
import { getAllMesoCycles } from '../../../api/cycles/mesoCycle'
import { getAllExercises } from '../../../api/exercises'
import { getAllGoals } from '../../../api/goals'
import { getProfile } from '../../../api/profile'
import { UserContext } from '../../../contexts/UserContext'
import { useCurrentWeekNum } from '../../../hooks/useCurrentWeekNum'
import styles from './Periodization.module.css'
import CycleCard from '../../Cards/CycleCards/CycleCard/CycleCard'
import ListCard from '../../Cards/ListCard/ListCard'


function CycleHierarchy() {

    const { user } = useContext(UserContext) 
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        address: null,
        dob: null, 
        gender: null,
    })
    const weekNumber = useCurrentWeekNum()
    
    const [macroCycles, setMacroCycles] = useState([])
    const [macroCycleLinks, setMacroCycleLinks] = useState([])
    const [macroCycleNodes, setMacroCycleNodes] = useState([])
    const [mesoCycles, setMesoCycles] = useState([])
    const [microCycles, setMicroCycles] = useState([])
    const [activities, setActivities] = useState([])
    const [exercises, setExercises] = useState([])
    const [goals, setGoals] = useState([])
    

    useEffect(() => {
        getAllExercises(user)
            .then((res) => {setExercises(res)})
            .catch((res) => {})
        getAllActivities(user)
            .then((res) => {setActivities(res)})
            .catch((res) => {})
        getProfile(user)
            .then((res) => {setProfile(res)})
            .catch((res) => {})
        getAllGoals(user)
            .then((res) => {setGoals(res)})
            .catch((res) => {})
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})
        getAllMesoCycles(user)
            .then((res) => {setMesoCycles(res)})
            .catch((res) => {})
        getAllMicroCycles(user)
            .then((res) => {setMicroCycles(res)})

            .catch((res) => {})
        }, [user])


  return (
    <div className={`${styles.cycle_hierarchy} sidebar_layout`}>
        <div className={`sidebar_box`}> 
            <ListCard />
        </div>
        <div className={`content_box`}> 

        <div className={`${styles.custom_meso}`}> 
            

        </div>
       
        </div>

    </div>
  )
}

export default CycleHierarchy
