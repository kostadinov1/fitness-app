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
import { DownOutlined } from '@ant-design/icons'

// TODO Create Meso Periodization and by that visualize Nivo Chard
    // and by that visualize Nivo Chart for Progression and Tree for the Cycles


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
    const [showMacros, setShowMacros] = useState(false)
    const [showMesos, setShowMesos] = useState(true)
    const [showMicros, setShowMicros] = useState(true)

    const [mircoClone, setMicroClone] = useState({
        name: '',
        activities: [
            {
                name: '',
                exercises: [
                    {
                        name: ''
                    }
                ]
            }
        ],

    })

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
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, false)
    const toggleMacros = () => {
        if (showMacros === true) {
            setShowMacros(false) 
        } else if (showMacros === false) {
            setShowMacros(true)
        } 
    }
    const toggleMesos = () => {
        if (showMesos === true) {
            setShowMesos(false) 
        } else if (showMesos === false) {
            setShowMesos(true)
        } 
    }
    const toggleMicros = () => {
        if (showMicros === true) {
            setShowMicros(false) 
        } else if (showMicros === false) {
            setShowMicros(true)
        }
    }

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
            <div onClick={toggleMacros} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
                {selectedMacro?
                    <div>
                        <DownOutlined 
                            style={showMacros ? null: {rotate: '180deg'}}
                    /> MACRO CYCLE: {selectedMacro?.name} </div>
                    :<div><DownOutlined 
                            style={showMacros ? null : {rotate: '180deg'}}
                    /> MACRO CYCLES </div>}
            </div>
            <div 
                style={showMacros ? {display: 'none'} : {display: 'flex'}}
                 className={`${styles.macro_box} ${styles.cycle_box}`}> 
                {macroCycles ? macroCycles
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((macro) =>
                        <div  key={macro.id} onClick={() => {
                            setShowMesos(false)
                                setSelectedMacro(macro)
                                setShowMacros(true)
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
            <div onClick={toggleMesos} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
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
            <div 
                style={showMesos ? {display: 'none'} : {display: 'flex'}}
                className={`${styles.meso_box} ${styles.cycle_box}`}> 
                {(currentMesoCyclesList) ?
                    currentMesoCyclesList
                    .sort((a, b) => a.start_date > b.start_date)
                    .map((meso) => 
                        <div
                        key={meso.id} onClick={() => {
                                setSelectedMeso(meso)
                                setShowMicros(false)
                                }}>
                            <MesoCard 
                                key={meso.id}
                                meso={meso}
                                onDelete={() => dispatch({type: 'showMesoDelete'})}
                                />
                                
                        </div>)    
                : null}
                <PlaceholderCard  cycleType={'meso'}/>
            </div>

            <div onClick={toggleMicros} className={`${styles.cycle_title} ${styles.cycle_box}`}> 
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
                    <div>MICRO (WEEK): {selectedMicro?.name} </div>
                    :<div>MICRO WEEK </div>}
            </div>
            <div className={`${styles.micro_edit} ${styles.cycle_box}`}> 
                {selectedMicro?.activities ?
                        <PeriWeek activities={selectedMicro?.activities}></PeriWeek>          
                    : null}

                <div className={`${styles.micro_edit_toolbar}`}> 

                    <div className={`${styles.cycle_form_box} ${styles.cycle_box}`}> 

                        <form className={`${styles.cycle_form}`}>

                            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                                <label>{selectedMicro?.name}</label>
                            </div>

                            <div className={`${styles.form_field} ${styles.form_field_2}`}>

                                <label className={`${styles.week_adjust_1}`}>Number of Weeks</label>
                                <input className={`${styles.week_adjust_2}`} type='number'></input>
                                <Slider className={`${styles.week_adjust_3}`}></Slider>
                            </div>


                            <div className={`${styles.form_field} ${styles.form_field_3}`}>
                                <button className={`${styles.button}`}>EDIT</button>
                            </div>
                            <div className={`${styles.form_field} ${styles.form_field_4}`}>
                                <button className={`${styles.button}`}> SAVE PERIODIZATION</button>
                            </div>


                            <div className={`${styles.form_field} ${styles.form_field_5} ${styles.cancel_button}`}>
                                <button className={`${styles.button}`}>CANCEL</button>
                            </div>
                        </form> 
                    </div> 
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Periodization
