import React, { useContext, useEffect, useState } from 'react'
import { getAllActivities } from '../../../api/activities'
import { getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { getAllMicroCycles } from '../../../api/cycles/microCycle'
import { getAllMesoCycles } from '../../../api/cycles/mesoCycle'
import { getAllExercises } from '../../../api/exercises'
import { getAllGoals } from '../../../api/goals'
import { getProfile } from '../../../api/profile'
import { UserContext } from '../../../contexts/UserContext'
import styles from './Periodization.module.css'
import ListCard from '../../Cards/ListCard/ListCard'
import CycleCard from './../../Cards/CycleCards/CycleCard/CycleCard'
import { useNavigate } from 'react-router-dom'
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek'
import MesoCard from '../../Cards/CycleCards/MesoCard/MesoCard'


function Periodization() {
    
    const navigate = useNavigate()
    const { user } = useContext(UserContext) 
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        address: null,
        dob: null, 
        gender: null,
    })
    const [macroCycles, setMacroCycles] = useState([])
    const [mesoCycles, setMesoCycles] = useState([])
    const [microCycles, setMicroCycles] = useState([])
    const [activities, setActivities] = useState([])
    const [exercises, setExercises] = useState([])
    const [goals, setGoals] = useState([])
    
    const [selectedMacro, setSelectedMacro] = useState()
    const [selectedMeso, setSelectedMeso] = useState()
    const [selectedMicro, setSelectedMicro] = useState()

    const [periWeekActivities, setPeriWeekActivities] = useState([])
    
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
            .then((res) => {setMicroCycles(res)
            setPeriWeekActivities(res.activities)
            })
            .catch((res) => {})
        }, [user])

    useEffect(() => {
        setSelectedMacro(macroCycles[0])
        setSelectedMeso(mesoCycles[0])
        setSelectedMicro( selectedMeso ? selectedMeso.micro_cycles[0] : microCycles[0])
        setPeriWeekActivities(selectedMicro ? selectedMicro.activities : [])
    }, [macroCycles, microCycles, mesoCycles, selectedMicro])


    // console.log(selectedMicro, 'activities in periodization')

  return (
    <div className={`${styles.periodization} layout`}>
        <div className={`sidebar_box`}> 
            <ListCard />
        </div>

        <div className={`content_box ${styles.content_box}`}>

        <div className={`${styles.macro_box}`}> 
          {macroCycles ? macroCycles.map((macro) => <CycleCard  cycle={macro}></CycleCard>): null}
        </div>

        <div className={`${styles.meso_box}`}> 
            {selectedMacro ?
                selectedMacro.meso_cycles.map((meso) => 
                    <div onClick={() => setSelectedMeso(meso)}>
                        <MesoCard meso={meso} />
                    </div>)   
            :null}
        </div>
        <div className={`${styles.micro_box}`}> 
            <PeriWeek activities={periWeekActivities}></PeriWeek>

        </div>
       
        </div>

    </div>
  )
}

export default Periodization
