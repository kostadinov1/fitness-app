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
        setSelectedMicro(selectedMeso?.micro_cycles[0])
        setPeriWeekActivities(selectedMicro?.activities)
    }, [macroCycles, microCycles, mesoCycles, selectedMicro, selectedMeso])



  return (
    <div className={`${styles.periodization} layout`}>
        <div className={`sidebar_box`}> 
            <ListCard />
        </div>

        <div className={`content_box ${styles.content_box}`}>

            <div className={`${styles.macro_box}`}> 
                {macroCycles ? macroCycles.map((macro) =>
                    <div onClick={() => setSelectedMacro(macro)}>
                        <CycleCard  cycle={macro}></CycleCard>
                    </div>
                    )
                : null}
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
