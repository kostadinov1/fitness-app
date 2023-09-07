import React, { useContext, useEffect, useState } from 'react'
import { deleteMacroCycle, getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { deleteMicroCycle, getAllMicroCycles } from '../../../api/cycles/microCycle'
import { deleteMesoCycle, getAllMesoCycles } from '../../../api/cycles/mesoCycle'
import { UserContext } from '../../../contexts/UserContext'
import styles from './Periodization.module.css'
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek'
import MesoCard from '../../Cards/CycleCards/MesoCard/MesoCard'
import PlaceholderCard from '../../Cards/PlaceholderCard/PlaceholderCard'
import MacroCard from '../../Cards/CycleCards/MacroCard/MacroCard'
import { Slider } from 'antd'
import DeleteCycleModal from '../../Modals/DeleteCycleModal/DeleteCycleModal'


function Periodization() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
    
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

        // Macro and Meso Cycles get updates SELECTED from MesoCard component

        // to update Selected Micro Cycle
        setSelectedMicro(selectedMeso?.micro_cycles[0])
        // to update activities when select new Micro Cycle
        setPeriWeekActivities(selectedMicro?.activities)
    }, [user, macroCycles, microCycles, mesoCycles, selectedMicro, selectedMeso])

    const onDelete = () => {
        setShowDeleteModal(true)
    }

    const onDeleteConfirm = (currentCycle) => {
        if (currentCycle.macro_cycle) {
                console.log(currentCycle, 'meso cycle here')
                deleteMesoCycle(user, currentCycle)
                    .then((res) => setMesoCycles((state) => state.filter((cycle) => cycle.id !== currentCycle.id)))
                    // .then((res) => {console.log(res, 'res meso success')})
                    .catch((res) => { console.log(res, 'res meso error')});
            } else {
                deleteMacroCycle(user ,currentCycle)
                    .then((res) => {console.log(res, 'res macro success')})
                    .catch((res) => { console.log(res, 'res macro error')});
                console.log(currentCycle, 'macro cycle here')
            }
            setShowDeleteModal(false)
        }
        

  return (
    <div className={`${styles.periodization}`}>

        <div className={`content_box ${styles.content_box}`}>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MACRO CYCLES</div>
            </div>
            <div className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => setSelectedMacro(macro)}>
                            <MacroCard 
                                key={macro.id}
                                macro={macro} 
                                onDelete={onDelete}
                                />
                            {showDeleteModal ? 
                                    <DeleteCycleModal
                                        cycle={macro} 
                                        onDeleteConfirm={onDeleteConfirm}
                                        setShowDeleteModal={setShowDeleteModal} 
                                                      />
                                : null}
                        </div>)
                : null}
                <PlaceholderCard  cycle_type={'macro'}/>
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
                            <MesoCard 
                                key={meso.id}
                                meso={meso} 
                                onDelete={onDelete}
                                />
                                {showDeleteModal ? 
                                    <DeleteCycleModal
                                        cycle={meso} 
                                        onDeleteConfirm={onDeleteConfirm}
                                        setShowDeleteModal={setShowDeleteModal} 
                                                      />
                                : null}
                        </div>)   
                : null}
                <PlaceholderCard  cycle_type={'meso'}/>
            </div>
            
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MICRO CYCLE</div>
            </div>
            
            <div className={`${styles.micro_box} ${styles.cycle_box}`}> 
                <PeriWeek activities={periWeekActivities}></PeriWeek>
            </div>
            <div className={`${styles.cycle_form_box} ${styles.cycle_box}`}> 
                <form className={`${styles.form}`}>
                    <div className={`${styles.form_field}`}>
                    <div className={`${styles.form_field}`}>
                        <label>Micro Cycles Default Name</label>
                        <input></input>
                    </div>
                        <label>Number of Weeks</label>
                        <Slider></Slider>
                    </div>
                    <div className={`${styles.form_field}`}>
                        <label>Exercises SETS WEEKLY Incrementation</label>
                        <Slider></Slider>                        
                    </div>
                    <div className={`${styles.form_field}`}>
                        <label>Exercises REPS WEEKLY Incrementation</label>
                        <Slider></Slider>                        
                    </div>
                    <button>Create Meso Periodization</button>
                </form> 

            </div>
        </div>

    </div>
  )
}

export default Periodization
