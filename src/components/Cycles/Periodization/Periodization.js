import React, { useContext, useEffect, useState } from 'react'
import { getAllActivities } from '../../../api/activities'
import { getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { getAllMicroCycles } from '../../../api/cycles/microCycle'
import { editMesoCycle, getAllMesoCycles } from '../../../api/cycles/mesoCycle'
import { getAllExercises } from '../../../api/exercises'
import { getAllGoals } from '../../../api/goals'
import { getProfile } from '../../../api/profile'
import { UserContext } from '../../../contexts/UserContext'
import { useCurrentWeekNum } from '../../../hooks/useCurrentWeekNum'
import styles from './Periodization.module.css'
import ListCard from '../../Cards/ListCard/ListCard'
import { useNavigate } from 'react-router-dom'
import { Slider } from 'antd'
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek'


function CycleHierarchy() {
    
    const navigate = useNavigate()
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
    
    const [weeks, setWeks] = useState(1)
    
    const filteredMeso = useState([])

    const [formData, setFormData] = useState({
        name: undefined,
        start_date: undefined,
        end_date: undefined,
        description: undefined, 
        goals: undefined,
        macro_cycle : undefined,
        user: user.user_id
    })

    useEffect(() => {

    }, [])

    const onValueChange = (e, data) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }
    const onSliderChange = (value) => {
        setWeks(value)
    }

    const onFormSubmitHandler = (e) => {
        e.preventDefault()

        editMesoCycle(user, formData)
            .then((res) => {
                navigate('/periodization')
            })
            .catch((res) => {})
    }

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

        console.log(exercises, mesoCycles, 'exes mesocycles')

  return (
    <div className={`${styles.periodization} layout`}>
        <div className={`sidebar_box`}> 
            <ListCard />
        </div>

        <div className={`content_box ${styles.content_box}`}>

        <div className={`${styles.macro_box}`}> 
          
        </div>

        <div className={`${styles.meso_box}`}> 
        <div className={`${styles.peri_activity}`}>
            {filteredMeso ?
                filteredMeso.exercises.map((exercise) => 
                        <p key={exercise.id}> {exercise.name} </p>)
            :null}
            </div>
        </div>
        <div className={`${styles.micro_box}`}> 
            <PeriWeek activities={activities}></PeriWeek>

        </div>
       
        </div>

    </div>
  )
}

export default CycleHierarchy
