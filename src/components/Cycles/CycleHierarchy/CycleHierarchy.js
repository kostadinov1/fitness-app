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
import HierarchyTree from '../../NivoCharts/HierarchyTree'
import styles from './CycleHierarchy.module.css'
import CycleCard from '../CycleCards/CycleCard/CycleCard'
import SideBar from '../../Main/SideBar/SideBar'
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
    
    // Create Custom Links for Nivo Network
    const getMacroCycleLinks = (macrocycles) => {
        const result = []
        if (macrocycles) {
            for (const macrocycle of macrocycles) {
                for (const meso of macrocycle.meso_cycles) {
                    result.push({
                        "source": `${macrocycle.name} ${macrocycle.id}`,
                        "target": `${meso.name} ${meso.id}`,
                        "distance": 300
                      })
                    for (const micro of meso.micro_cycles) {
                                       result.push({
                        "source": `${meso.name} ${meso.id}`,
                        "target":  `${micro.name} ${micro.id}`,
                        "distance": 100
                      })
                    }
                }
            }
            return result
        } else {
            return []
        }
    }
    // Create Custom Nodes for Nivo Network
    const getMacroCycleNodes = (macrocycles) => {
        const result = []
        for (const macro of macrocycles) {
            result.push(
                {
                "id": `${macro.name} ${macro.id}`,
                "name": `${macro.name}`,
                "cycleType": 'Macro Cycle',
                "start_date":  `${macro.start_date}`,
                "end_date":  `${macro.end_date}`,
                "height": 2,
                "size": 300,
                "color": "orangered"
              }
            )
            for (const meso of macro.meso_cycles) {
                result.push(
                    {
                    "id": `${meso.name} ${meso.id}`,
                    "name": `${meso.name}`,
                    "cycleType": 'Meso Cycle',
                    "start_date": `${meso.start_date}`,
                    "end_date": `${meso.end_date}`,
                    "height": 1,
                    "size": 110,
                    "color": "var(--acc-3)"
                  }
                )
                for (const micro of meso.micro_cycles) {
                    result.push( 
                        {
                        "id": `${micro.name} ${micro.id}`,
                        "name": `${micro.name}`,
                        "cycleType": 'Micro Cycle',
                        "start_date":  `${micro.start_date}`,
                        "end_date":  `${micro.end_date}`,
                        "height": 1,
                        "size": 50,
                        "color": "yellowgreen"
                      }
                    )
                }
            }
        return result
        }
    }
    // Modified Data for Nivo Responsive Network / HierarchyTree
    const newCycleData = {
        "nodes": macroCycleNodes,
        "links": macroCycleLinks
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
            .then((res) => {setMacroCycles(res)
                setMacroCycleNodes(getMacroCycleNodes(res))
                setMacroCycleLinks(getMacroCycleLinks(res))
            })
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

        <div className={`${styles.nivo_network}`}> 
            <HierarchyTree data={newCycleData} />
        </div>
        <div className={`${styles.cycle_tree}`}>
            <div className={`${styles.macro_cycle}`}>
                {macroCycles ? macroCycles.map((macro) => <CycleCard key={macro.id} cycle={macro} />) : <p>no cycle</p>}
            </div>  
            <div className={`${styles.meso_cycle}`}>
                {mesoCycles ? mesoCycles.map((meso) => <CycleCard key={meso.id} cycle={meso} />) : <p>no cycle</p>}
            </div>  
            <div className={`${styles.micro_cycle}`}>
                {microCycles ? microCycles.map((micro) => <CycleCard key={micro.id} cycle={micro} />) : <p>no cycle</p>}   
            </div>  
        </div>    
        </div>

    </div>
  )
}

export default CycleHierarchy
