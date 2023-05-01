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




const cycleData = {


  "nodes": [
    {
      "id": "Node 0",
      "height": 10,
      "size": 120,
      "color": "rgb(97, 255, 1)"
    },
        {
            "id": "Node 1",
            "height": 8,
            "size": 80,
            "color": "rgb(97, 255, 1)"
        },
            {
                "id": "Node 1.1",
                "height": 8,
                "size": 80,
                "color": "rgb(97, 255, 1)"
            },
            {
                "id": "Node 1.2",
                "height": 8,
                "size": 80,
                "color": "rgb(97, 255, 1)"
            },
  ],

  "links": [
    {
      "source": "Node 0",
      "target": "Node 1",
      "distance": 180
    },
    {
        "source": "Node 1",
        "target": "Node 1.1",
        "distance": 60
      },
      {
        "source": "Node 1",
        "target": "Node 1.2",
        "distance": 60
      },
  ]
}

function CycleHierarchy() {
    const weekNumber = useCurrentWeekNum()

    const [macroCycles, setMacroCycles] = useState([])
    const [mesoCycles, setMesoCycles] = useState([])
    const [microCycles, setMicroCycles] = useState([])
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

    
    const getMacroCycleLinks = (macrocycles) => {
        const result = []
            for (const macrocycle of macrocycles) {
                for (const meso of macrocycle.meso_cycles) {
                    for (const micro of meso.micro_cycles) {
                                       result.push({
                        "source": `${meso.name} ${meso.id}`,
                        "target":  `${micro.name} ${micro.id}`,
                        "distance": 90
                      })
                    }
                    result.push({
                        "source": `${macrocycle.name} ${macrocycle.id}`,
                        "target": `${meso.name} ${meso.id}`,
                        "distance": 260
                      })
                }

            }
            return result
    }

    const macroCycleLinks =  getMacroCycleLinks(macroCycles)

    const newCycleData = {
        "nodes": [
            ...(macroCycles.map((cycle) => ({
                    "id": `${cycle.name} ${cycle.id}`,
                    "height": 10,
                    "size": 120,
                    "color": "var(--acc-2)"
                  })
            )),
            ...(mesoCycles.map((cycle) => ({
                "id": `${cycle.name} ${cycle.id}`,
                "height": 8,
                "size": 80,
                "color": "var(--acc-1)"
            })
            )),
            ...(microCycles.map((cycle) => ({
                "id": `${cycle.name} ${cycle.id}`,
                "height": 6,
                "size": 40,
                "color": "yellowgreen"
            })
            )),
        ],
        "links": macroCycleLinks
    }
    console.log(macroCycleLinks, 'macrolinks');
    // const activitiesCarded = activities?.map((activity) => <ActivityMiniCard activity={activity} onDragStart={handleDragStart} role="presentation" />)
    // const exercisesCarded = exercises?.map((exercise) => <ExerciseCard  exercise={exercise} onDragStart={handleDragStart} role="presentation" />)

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
    <div className={`${styles.cycle_hierarchy}`}>
      <HierarchyTree 
        data={newCycleData} />
    </div>
  )
}

export default CycleHierarchy
