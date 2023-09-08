import React, { useContext, useEffect, useState } from 'react'
import { deleteMacroCycle, getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { UserContext } from '../../../contexts/UserContext'
import styles from './Periodization.module.css'
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek'
import MesoCard from '../../Cards/CycleCards/MesoCard/MesoCard'
import PlaceholderCard from '../../Cards/PlaceholderCard/PlaceholderCard'
import MacroCard from '../../Cards/CycleCards/MacroCard/MacroCard'
import { Slider } from 'antd'
import DeleteMesoCycleModal from '../../Modals/DeleteMesoCycleModal/DeleteMesoCycleModal'
import DeleteMacroCycleModal from '../../Modals/DeleteMacroCycleModal/DeleteMacroCycleModal'
import { deleteMesoCycle } from '../../../api/cycles/mesoCycle'


function Periodization() {
    const { user } = useContext(UserContext) 
    const [macroCycles, setMacroCycles] = useState([])
    const [selectedMacro, setSelectedMacro] = useState()
    const [selectedMeso, setSelectedMeso] = useState()
    const [selectedMicro, setSelectedMicro] = useState()
    const [periWeekActivities, setPeriWeekActivities] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDeleteMacroModal, setShowDeleteMacroModal] = useState(false)
    
    const [currentMesoCycles, setCurrentMesoCycles] = useState([])
    useEffect(() => {
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})
    }, [user, selectedMicro, selectedMeso])

    useEffect(() => {
        setSelectedMicro(selectedMeso?.micro_cycles[0])
    // selectedMacro.meso_cycles
        setCurrentMesoCycles(selectedMacro?.meso_cycles)
        setPeriWeekActivities(selectedMicro?.activities)
    }, [selectedMacro, selectedMeso, selectedMicro])

    const onDelete = () => {setShowDeleteModal(true)}
    const onNoClick = () => {setShowDeleteModal(false)}

    const onDeleteMacro = () => {setShowDeleteMacroModal(true)}
    const onNoClickMacro = () => {setShowDeleteMacroModal(false)}

    const onDeleteConfirm = (cycle) => {
        deleteMesoCycle(user, cycle)
            .then((res) => {
                setCurrentMesoCycles((state) => state.filter((meso) => meso.id !== cycle.id))
                console.log(res, 'res success currrrrrrrr');
            })
            .catch((res) => {
                console.log(res, 'res error meso');
            })
        setShowDeleteModal(false)
        }

    const onDeleteMacroConfirm = (cycle) => {
        deleteMacroCycle(user, cycle)
            .then((res) => {
                console.log(res, 'res success macro');
            })
            .catch((res) => {
                console.log(res, 'res error macro');
            })
        setShowDeleteMacroModal(false)
        }
        
  return (
    <div className={`${styles.periodization}`}>
        {showDeleteMacroModal ? 
            <DeleteMacroCycleModal
                cycle={selectedMacro}
                onDeleteMacroConfirm={onDeleteMacroConfirm}
                onNoClick={onNoClickMacro}
                />
        : null}
        {showDeleteModal ? 
            <DeleteMesoCycleModal
                cycle={selectedMeso}
                onDeleteConfirm={onDeleteConfirm}
                onNoClick={onNoClick}
                />
        : null}
        <div className={`content_box ${styles.content_box}`}>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MACRO CYCLES</div>
            </div>
            <div className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => {setSelectedMacro(macro)}}>
                            <MacroCard 
                                key={macro.id}
                                macro={macro} 
                                onDelete={onDeleteMacro}
                                />
                        </div>)
                : null}
                <PlaceholderCard  cycleType={'macro'}/>
            </div>

            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>MESO CYCLES</div>
            </div>
            <div className={`${styles.meso_box} ${styles.cycle_box}`}> 

                {/* {selectedMacro ?
                    selectedMacro.meso_cycles */}
                {(selectedMacro && currentMesoCycles) ?
                    currentMesoCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((meso) => 
                        <div key={meso.id} onClick={() => setSelectedMeso(meso)}>
                            <MesoCard 
                                key={meso.id}
                                meso={meso}
                                onDelete={onDelete}
                                />
                                
                        </div>)   
                : null}
                <PlaceholderCard  cycleType={'meso'}/>
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
