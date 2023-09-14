import React, { useContext, useEffect, useReducer, useState } from 'react'
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
import MicroCard from '../../Cards/CycleCards/MicroCard/MicroCard'


function Periodization() {
    const { user } = useContext(UserContext) 
    const [macroCycles, setMacroCycles] = useState([])
    const [selectedMacro, setSelectedMacro] = useState()
    const [selectedMeso, setSelectedMeso] = useState()
    const [selectedMicro, setSelectedMicro] = useState()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDeleteMicroModal, setShowDeleteMicroModal] = useState(false)
    const [showDeleteMacroModal, setShowDeleteMacroModal] = useState(false)
    const [currentMesoCyclesList, setCurrentMesoCyclesList] = useState([])
    const [currentMicroCyclesList, setCurrentMicroCyclesList] = useState([])
    const [showMacros, setShowMacros] = useState(true)
    const [showMesos, setShowMesos] = useState(false)
    const [showMicros, setShowMicros] = useState(false)

    const reducer = (state, action) => {
        switch (action.type){
            case 'showMacroDelete':
                return setShowDeleteMacroModal(true)
            case 'hideMacroDelete':
                return setShowDeleteMacroModal(false)
            case 'showMesoDelete':
                return setShowDeleteModal(true)
            case 'hideMesoDelete':
                return setShowDeleteModal(false)
            case 'showMicroDelete':
                return setShowDeleteMicroModal(true)
            case 'hideMicroDelete':
                return setShowDeleteMicroModal(false)

            case 'showMacrosDelete':
                return setShowMacros(true)
            case 'hideMacrosDelete':
                return setShowMacros(false)
            case 'showMesosDelete':
                return setShowMesos(true)
            case 'hideMesosDelete':
                return setShowMesos(false)   
            case 'showMicrosDelete':
                return setShowMicros(true)
            case 'hideMicrosDelete':
                return setShowMicros(false)               
            default:
            

                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, false)

    useEffect(() => {
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})

        setCurrentMesoCyclesList(selectedMacro?.meso_cycles)
        setCurrentMicroCyclesList(selectedMeso?.micro_cycles)
    }, [user, selectedMacro, selectedMeso, selectedMicro])
    const onDeleteConfirm = (cycle) => {
        deleteMesoCycle(user, cycle)
            .then((res) => {
                setCurrentMesoCyclesList((state) => 
                    state.filter((meso) => meso.id !== cycle.id))
            })
            .catch((res) => {})
        setShowDeleteModal(false)
        }
    const onDeleteMacroConfirm = (cycle) => {
        deleteMacroCycle(user, cycle)
            .then((res) => {
              setMacroCycles((state) => 
                state.filter((macro) => macro.id !== cycle.id))
            })
            .catch((res) => {})
        setShowDeleteMacroModal(false)
        }

  return (
    <div className={`${styles.periodization}`}>
        {showDeleteMacroModal ? 
            <DeleteMacroCycleModal
                cycle={selectedMacro}
                onDeleteMacroConfirm={onDeleteMacroConfirm}
                dispatch={dispatch}
                />
        : null}
        {showDeleteModal ? 
            <DeleteMesoCycleModal
                cycle={selectedMeso}
                onDeleteConfirm={onDeleteConfirm}
                dispatch={dispatch}
                />
        : null}
        <div className={`content_box ${styles.content_box}`}>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                {selectedMacro?
                    <div>MACRO CYCLE: {selectedMacro?.name} </div>
                    :<div>MACRO CYCLES </div>}
            </div>
            <div className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => {
                                setSelectedMacro(macro)
                                setSelectedMeso()
                            }}>
                            <MacroCard 
                                key={macro.id}
                                macro={macro} 
                                onDelete={() => dispatch({type: 'showMacroDelete'})}
                                />
                        </div>)
                : null}
                <PlaceholderCard  cycleType={'macro'}/>
            </div>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
            {selectedMeso?
                    <div>MESO CYCLE: {selectedMeso?.name} </div>
                    :<div>MESO CYCLES </div>}
            </div>
            <div className={`${styles.meso_box} ${styles.cycle_box}`}> 
                {(currentMesoCyclesList) ?
                    currentMesoCyclesList
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((meso) => 
                        <div
                        key={meso.id} onClick={() => setSelectedMeso(meso)}>
                            <MesoCard 
                                key={meso.id}
                                meso={meso}
                                onDelete={() => dispatch({type: 'showMesoDelete'})}
                                />
                                
                        </div>)    
                : null}
                <PlaceholderCard  cycleType={'meso'}/>
            </div>

            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
            {selectedMicro?
                    <div>MICRO CYCLE: {selectedMicro?.name} </div>
                    :<div>MICRO CYCLES </div>}
            </div>
            <div className={`${styles.meso_box} ${styles.cycle_box}`}> 
                {(currentMicroCyclesList) ?
                    currentMicroCyclesList
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((micro) => 
                        <div
                        key={micro.id} onClick={() => setSelectedMicro(micro)}>
                            <MicroCard
                                key={micro.id}
                                cycle={micro}
                                // onDelete={onDelete}
                                />
                        </div>)    
                : null}
                <PlaceholderCard  cycleType={'micro'}/>
            </div>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                    {selectedMicro?
                    <div>MICRO CYCLE: {selectedMicro?.name} </div>
                    :<div>MICRO CYCLES </div>}
            </div>
            <div className={`${styles.micro_box} ${styles.cycle_box}`}> 
                {selectedMicro?.activities ?
                        <PeriWeek activities={selectedMicro?.activities}></PeriWeek>          
                    : <PlaceholderCard  cycleType={'micro'}/>}
            </div>
            <div className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                <div>CONFIGURE WEEKLY INCREMENTATION</div>
            </div>
            <div className={`${styles.cycle_form_box} ${styles.cycle_box}`}> 
                <form className={`${styles.form}`}>
                    <div className={`${styles.form_field}`}>
                        <label>Micro Cycles Default Name</label>
                        <input></input>
                    </div>
                    <div className={`${styles.form_field}`}>
                        <label>Number of Weeks</label>
                        <input type='number'></input>
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
                    <div className={`${styles.form_field}`}>
                    <button>CREATE Periodization</button>
                    </div>
                    <div className={`${styles.form_field}`}>
                    <button>CANCEL</button>
                    </div>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Periodization
