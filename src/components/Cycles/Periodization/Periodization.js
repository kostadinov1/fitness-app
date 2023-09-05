import React, { useContext, useEffect, useState } from 'react'
import { getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { getAllMicroCycles } from '../../../api/cycles/microCycle'
import { getAllMesoCycles } from '../../../api/cycles/mesoCycle'
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

    const [macroCycles, setMacroCycles] = useState([])
    const [mesoCycles, setMesoCycles] = useState([])
    const [microCycles, setMicroCycles] = useState([])

    const [selectedMacro, setSelectedMacro] = useState()
    const [selectedMeso, setSelectedMeso] = useState()
    const [selectedMicro, setSelectedMicro] = useState()

    const [periWeekActivities, setPeriWeekActivities] = useState([])
    
    useEffect(() => {
        getAllMacroCycles(user)
            .then((res) => {
                setMacroCycles(res)})
            .catch((res) => {})
        getAllMesoCycles(user)
            .then((res) => {
                setMesoCycles(res)})
            .catch((res) => {})
        getAllMicroCycles(user)
            .then((res) => {
                setMicroCycles(res)
                setPeriWeekActivities(res.activities)
            })
            .catch((res) => {})
        }, [user])


    useEffect(() => {
        // Macro and Meso Cycles get updates SELECTED from MesoCard component

        // to update Selected Micro Cycle
        setSelectedMicro(selectedMeso?.micro_cycles[0])
        // to update activities when select new Micro Cycle
        setPeriWeekActivities(selectedMicro?.activities)
    }, [macroCycles, microCycles, mesoCycles, selectedMicro, selectedMeso])



  return (
    <div className={`${styles.periodization} layout`}>
        <div className={`sidebar_box`}> 
            <ListCard />
        </div>

        <div className={`content_box ${styles.content_box}`}>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MACRO CYCLES</div>
            </div>
            <div className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => setSelectedMacro(macro)}>
                            <MesoCard  meso={macro}></MesoCard>
                        </div>
                        )
                : null}
            </div>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MESO CYCLES</div>
            </div>
            <div className={`${styles.meso_box} ${styles.cycle_box}`}> 
                {selectedMacro ?
                    selectedMacro.meso_cycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((meso) => 
                            <div key={meso.id} onClick={() => setSelectedMeso(meso)}>
                                <MesoCard meso={meso} />
                            </div>)   
                :null}
            </div>
            
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MACRO CYCLES</div>
            </div>
            <div className={`${styles.micro_box} ${styles.cycle_box}`}> 
                <PeriWeek activities={periWeekActivities}></PeriWeek>
            </div>
        </div>

    </div>
  )
}

export default Periodization
