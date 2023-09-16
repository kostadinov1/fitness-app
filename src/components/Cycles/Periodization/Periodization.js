import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createMacroCycle, deleteMacroCycle, getAllMacroCycles } from '../../../api/cycles/macroCycle'
import { UserContext } from '../../../contexts/UserContext'
import styles from './Periodization.module.css'
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek'
import MesoCard from '../../Cards/CycleCards/MesoCard/MesoCard'
import PlaceholderCard from '../../Cards/PlaceholderCard/PlaceholderCard'
import MacroCard from '../../Cards/CycleCards/MacroCard/MacroCard'
import DeleteMesoCycleModal from '../../Modals/DeleteMesoCycleModal/DeleteMesoCycleModal'
import DeleteMacroCycleModal from '../../Modals/DeleteMacroCycleModal/DeleteMacroCycleModal'
import { deleteMesoCycle } from '../../../api/cycles/mesoCycle'
import MicroCard from '../../Cards/CycleCards/MicroCard/MicroCard'
import { DownOutlined } from '@ant-design/icons'
import { createExercise } from '../../../api/exercises'
import { createActivity } from '../../../api/activities'
import { useTransformDate } from '../../../hooks/useTransformDate'
import { createMicroCycle } from '../../../api/cycles/microCycle'
import { createMesoPeriodization } from '../../../utils/createMesoPeriodization.js'

// TODO Create Meso Periodization 
    // and by that visualize Nivo Chart for Progression and Tree for the Cycles
function Periodization() {
    const { user } = useContext(UserContext) 
    // Objects
    const [macroCycles, setMacroCycles] = useState([])

    const [selectedMacro, setSelectedMacro] = useState()
    const [selectedMeso, setSelectedMeso] = useState()
    const [selectedMicro, setSelectedMicro] = useState()

    const [currentMesoCyclesList, setCurrentMesoCyclesList] = useState([])
    const [currentMicroCyclesList, setCurrentMicroCyclesList] = useState([])
    // Show / Hide
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDeleteMicroModal, setShowDeleteMicroModal] = useState(false)
    const [showDeleteMacroModal, setShowDeleteMacroModal] = useState(false)
    const [showMacros, setShowMacros] = useState(false)
    const [showMesos, setShowMesos] = useState(true)
    const [showMicros, setShowMicros] = useState(true)

    // Number of weeks to be created in Mesocycle 
    const [state, dispatch] = useReducer(reducer, false)
    const [toggleState, toggleDispatch] = useReducer(toggleReducer, false)
    const [microCount, setMicroCount] = useState(4)

    // GET AND SET MAIN STATE
    useEffect(() => {
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})
        setCurrentMesoCyclesList(selectedMacro?.meso_cycles)
        setCurrentMicroCyclesList(selectedMeso?.micro_cycles)
    }, [user, selectedMacro, selectedMeso, selectedMicro])

    // Reducer to Show / Hide Modals
    function reducer(state, action) {
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
            default:
                return state
        }
    }
    // Reducer to Show / Hide Cycle Sections    
    function toggleReducer(state, action) {
        switch(action.type) {
            case 'toggle-macro':
                return showMacros ? setShowMacros(false) : setShowMacros(true);
            case 'toggle-meso':
                return showMesos ? setShowMesos(false) : setShowMesos(true);
            case 'toggle-micro':
                return showMicros ? setShowMicros(false) : setShowMicros(true);                
            default:
                return state
        }
    }
    // On Delete Mesocycle
    function onDeleteConfirm(cycle) {
        deleteMesoCycle(user, cycle)
            .then((res) => {
                setSelectedMacro((state) => 
                    ({...state,
                        meso_cycles: state.meso_cycles.filter((meso) =>  meso.id !== cycle.id)
                    }))              
                setCurrentMesoCyclesList(selectedMacro?.meso_cycles)
                setSelectedMeso()
                setShowMicros(true)
            })
            .catch((res) => {})
        setShowDeleteModal(false)
        }
    // On Delete Macrocycle
    function onDeleteMacroConfirm(cycle) {
        deleteMacroCycle(user, cycle)
            .then((res) => {
              setMacroCycles((state) => 
                state.filter((macro) => macro.id !== cycle.id))
            })
            .catch((res) => {})
        setShowDeleteMacroModal(false)
        }
    // Handle Submit Meso Periodization
    function onFormSubmitHandler(e) {
        e.preventDefault()
        // Imported Function
        createMesoPeriodization(user, selectedMicro, selectedMeso, microCount)
    }

// <<<<<===========================================================================>>>>> //

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
            <div onClick={() => toggleDispatch({type: 'toggle-macro'})} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                {selectedMacro?
                    <div>
                        <DownOutlined 
                            style={showMacros ? null: {rotate: '180deg'}}
                    /> MACRO CYCLE: {selectedMacro?.name} </div>
                    :<div><DownOutlined 
                            style={showMacros ? null : {rotate: '180deg'}}
                    /> MACRO CYCLES </div>}
            </div>
            <div style={showMacros ? {display: 'none'} : {display: 'flex'}}
                 className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => {
                            setShowMesos(false)
                                setSelectedMacro(macro)
                                // setShowMacros(true)
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
            <div onClick={() => toggleDispatch({type: 'toggle-meso'})} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
            {selectedMeso?
                    <div>
                        <DownOutlined 
                            style={showMacros ? null: {rotate: '180deg'}}
                            /> MESO CYCLE: {selectedMeso?.name} 
                    </div>
                    :<div>
                        <DownOutlined 
                            style={showMacros ? null: {rotate: '180deg'}}
                            /> MESO CYCLES 
                    </div>}
            </div>
            <div style={showMesos ? {display: 'none'} : {display: 'flex'}}
                className={`${styles.meso_box} ${styles.cycle_box}`}> 
                {(currentMesoCyclesList) ?
                    currentMesoCyclesList
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((meso) => 
                        <div
                        key={meso.id} onClick={() => {
                                setSelectedMeso(meso)
                                setShowMicros(false)
                                }}
                                >
                            <MesoCard 
                                key={meso.id}
                                meso={meso}
                                onDelete={() => dispatch({type: 'showMesoDelete'})}
                                />
                        </div>)    
                : null}
                <PlaceholderCard  cycleType={'meso'}/>
            </div>
            <div onClick={() => toggleDispatch({type: 'toggle-micro'})} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                    <div>
                    <DownOutlined 
                            style={showMacros ? null: {rotate: '180deg'}}
                            /> MICRO CYCLES
                     </div>
            </div>
            <div 
                style={showMicros ? {display: 'none'} : {display: 'flex'}}
                className={`${styles.micro_box} ${styles.cycle_box}`}> 
                {(currentMicroCyclesList) ?
                    currentMicroCyclesList
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((micro) => 
                        <div key={micro.id} onClick={() => setSelectedMicro(micro)}>
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
                    <div>Current Week: {selectedMicro?.name} </div>
                    :<div>Current Week </div>}
            </div>
            <div className={`${styles.micro_edit} ${styles.cycle_box}`}> 
                {selectedMicro?.activities ?
                        <PeriWeek activities={selectedMicro?.activities}></PeriWeek>          
                    : null}

            {selectedMicro?.activities ?
                <div className={`${styles.micro_edit_toolbar}`}> 
                    <div className={`${styles.cycle_form_box} ${styles.cycle_box}`}> 
                        <form 
                            onSubmit={onFormSubmitHandler}
                            className={`${styles.cycle_form}`}>
                            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                                <label>{selectedMicro?.name}</label>
                            </div>
                            <div className={`${styles.form_field} ${styles.form_field_2}`}>
                                <label className={`${styles.week_adjust_1}`}>Number of Weeks</label>
                                <input 
                                    value={microCount}
                                    onChange={(e) => setMicroCount(e.target.value)}
                                    className={`${styles.week_adjust_2}`}
                                    type='number'/>
                                <div className={`${styles.week_adjust_3}`}>
                                    <input 
                                        value={microCount} 
                                        onChange={(e) => setMicroCount(e.target.value)}
                                        type="range" 
                                        min="1" 
                                        max="52" 
                                        className={`${styles.slider}`}/>
                                </div>
                            </div>
                            <div className={`${styles.form_field} ${styles.form_field_3}`}>
                                <button 
                                onClick={(e) => e.preventDefault()}
                                className={`${styles.button}`}>EDIT</button>
                            </div>
                            <div className={`${styles.form_field} ${styles.form_field_4}`}>
                                <button 
                                className={`${styles.button}`}> SAVE PERIODIZATION</button>
                            </div>
                            <div className={`${styles.form_field} ${styles.form_field_5} ${styles.cancel_button}`}>
                                <button 
                                onClick={(e) => e.preventDefault()}
                                className={`${styles.button}`}>CANCEL</button>
                            </div>
                        </form> 
                    </div> 
                </div>
            : null}
            </div>
        </div>
    </div>
  )
}

export default Periodization
