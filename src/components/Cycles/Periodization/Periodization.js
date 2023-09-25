import React, { useContext, useEffect, useReducer, useState } from 'react';
import { deleteMacroCycle, getAllMacroCycles } from '../../../api/cycles/macroCycle';
import { UserContext } from '../../../contexts/UserContext';
import styles from './Periodization.module.css';
import PeriWeek from '../PeriBoard/PeriWeek/PeriWeek';
import MesoCard from '../../Cards/CycleCards/MesoCard/MesoCard';
import PlaceholderCard from '../../Cards/PlaceholderCard/PlaceholderCard';
import MacroCard from '../../Cards/CycleCards/MacroCard/MacroCard';
import DeleteMesoCycleModal from '../../Modals/DeleteMesoCycleModal/DeleteMesoCycleModal';
import DeleteMacroCycleModal from '../../Modals/DeleteMacroCycleModal/DeleteMacroCycleModal';
import { deleteMesoCycle } from '../../../api/cycles/mesoCycle';
import MicroCard from '../../Cards/CycleCards/MicroCard/MicroCard';
import { DownOutlined } from '@ant-design/icons';
import { createExercise } from '../../../api/exercises';
import { createActivity, getActivity } from '../../../api/activities';
import { createMicroCycle } from '../../../api/cycles/microCycle';

export function Periodization() {
    const { user } = useContext(UserContext);
    // Objects
    const [macroCycles, setMacroCycles] = useState([]);
    const [selectedMacro, setSelectedMacro] = useState();
    const [selectedMeso, setSelectedMeso] = useState();
    const [selectedMicro, setSelectedMicro] = useState();

    const [currentMesoCyclesList, setCurrentMesoCyclesList] = useState([]);
    const [currentMicroCyclesList, setCurrentMicroCyclesList] = useState([]);
    // Show / Hide
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeleteMicroModal, setShowDeleteMicroModal] = useState(false);
    const [showDeleteMacroModal, setShowDeleteMacroModal] = useState(false);

    const [showMacros, setShowMacros] = useState(false);
    const [showMesos, setShowMesos] = useState(false);
    const [showMicros, setShowMicros] = useState(true);
    // Number of weeks to be created in Mesocycle 
    const [state, dispatch] = useReducer(reducer, false);
    const [toggleState, toggleDispatch] = useReducer(toggleReducer, false);

    const [microCount, setMicroCount] = useState(4);
    const [dataIncrement, setDataIncrement] = useState({
        distance: 0,
        sets: 0,
        reps: 0,
        kg: 0,
    })


    // GET AND SET MAIN STATE
    useEffect(() => {
        getAllMacroCycles(user)
            .then((res) => {
                setMacroCycles(res);
            })
            .catch((res) => { });
        setCurrentMesoCyclesList(selectedMacro?.meso_cycles);
        setCurrentMicroCyclesList(selectedMeso?.micro_cycles);
    }, [user, selectedMacro, selectedMeso, selectedMicro]);

    // Reducer to Show / Hide Modals
    function reducer(state, action) {
        switch (action.type) {
            case 'showMacroDelete':
                return setShowDeleteMacroModal(true);
            case 'hideMacroDelete':
                return setShowDeleteMacroModal(false);
            case 'showMesoDelete':
                return setShowDeleteModal(true);
            case 'hideMesoDelete':
                return setShowDeleteModal(false);
            case 'showMicroDelete':
                return setShowDeleteMicroModal(true);
            case 'hideMicroDelete':
                return setShowDeleteMicroModal(false);
            case 'showCreateActivityModal':
            default:
                return state;
        }
    }
    // Reducer to Show / Hide Cycle Sections    
    function toggleReducer(state, action) {
        switch (action.type) {
            case 'toggle-macro':
                return showMacros ? setShowMacros(false) : setShowMacros(true);
            case 'toggle-meso':
                return showMesos ? setShowMesos(false) : setShowMesos(true);
            case 'toggle-micro':
                return showMicros ? setShowMicros(false) : setShowMicros(true);
            default:
                return state;
        }
    }
    // On Delete Mesocycle
    function onDeleteConfirm(cycle) {
        deleteMesoCycle(user, cycle)
            .then((res) => {
                setSelectedMacro((state) => ({
                    ...state,
                    meso_cycles: state.meso_cycles.filter((meso) => meso.id !== cycle.id)
                }));
                setCurrentMesoCyclesList(selectedMacro?.meso_cycles);
                setSelectedMeso();
                setShowMicros(true);
            })
            .catch((res) => { });
        setShowDeleteModal(false);
    }
    // On Delete Macrocycle
    function onDeleteMacroConfirm(cycle) {
        deleteMacroCycle(user, cycle)
            .then((res) => {
                setMacroCycles((state) => state.filter((macro) => macro.id !== cycle.id));
            })
            .catch((res) => { });
        setShowDeleteMacroModal(false);
    }
    // Handle Microcycle toolbar value changes
    const onValueChange = (e) => {
        console.log(e.target.value, 'data increment')
       setDataIncrement((state) => ({...state, [e.target.name]: e.target.value}))
    } 
    // Handle Submit Meso Periodization
    function onFormSubmitHandler(e) {
        e.preventDefault();
        createMesoPeriodization(user, selectedMicro, selectedMeso, microCount);
    }
    // CREATE MESO PERIODIZATION FUNCTION
    async function createMesoPeriodization(user, selectedMicro, selectedMeso, weekCount) {
        let currentMicroCycleInLoop = { ...selectedMicro };
        let initialActivities = [...selectedMicro?.activities];
        // Iterate for the given Number of Weeks(Micros) and create new Microcycle 
        for (let weekNum = 1; weekNum <= weekCount - 1; weekNum++) {
            const startDate = incrementDate(currentMicroCycleInLoop?.start_date, 7); // Increment by a Week
            const endDate = incrementDate(currentMicroCycleInLoop?.end_date, 7); // Increment by a Week
            const sendForm = {
                name: `Week ${weekNum + 1}`,
                start_date: startDate,
                end_date: endDate,
                meso_cycle: selectedMeso.id,
                user: user.user_id
            };
            await createMicroCycle(user, sendForm)
                // eslint-disable-next-line no-loop-func
                .then((res) => {
                    setCurrentMicroCyclesList(selectedMeso?.micro_cycles);
                    setSelectedMeso((state) => ({ ...state, micro_cycles: [...state.micro_cycles, res] }));
                    currentMicroCycleInLoop = ({ ...res });
                })
                .catch((res) => { console.log('ERROR IN CLONE MICRO', res); });
            // Activities for the next Microcyle iteration
            let nextMicroActivities = [];
            // Iterate over Initial Microcycle Activities and clone them to the new Microcyle   
            for (let activity = 0; activity < initialActivities.length; activity++) {
                const currActivity = initialActivities[activity];
                // Data to Create New Activity
                const activityData = {
                    name: `${currActivity.name}`,
                    // distance: currActivity?.distance + dataIncrement.distance,
                    start_time: incrementDate(currActivity?.start_time, 7),
                    micro_cycle: currentMicroCycleInLoop?.id,
                    user: user.user_id
                };
                // Next Activity for the newly cloned Exercise a bit further down
                let nextActivity = {};
                await createActivity(user, activityData)
                    .then((res) => {
                        // Push the newly created activity to the next Microcycle
                        nextMicroActivities.push(res);
                        // Get the id of the newly generated activity
                        nextActivity = { ...res };
                    })
                    .catch((res) => { console.log('ERROR IN CLONE ACTIVITY', res); });
                    
                const currExercises = currActivity?.exercises;
                // Clone current activity exercises to the newly generated activity
                for (let exercise = 0; exercise < currExercises?.length; exercise++) {
                    const currentExercise = currExercises[exercise];
                    const exerciseData = {
                        name: currentExercise.name,
                        reps: currentExercise.reps + dataIncrement.reps, 
                        sets: currentExercise.sets + dataIncrement.sets,
                        weights_in_kg: currentExercise.weights_in_kg + dataIncrement.kg,
                        activity: nextActivity.id,
                        user: user.user_id
                    };
                    await createExercise(user, exerciseData)
                        .then((res) => { console.log('SUCCESS IN CLONE EXERCISE', res); })
                        .catch((res) => { console.log('ERROR IN CLONE EXERCISE', res); });
                }
            }
            // the activities i send to the next iteration does NOT have the exercises 
            let newActivities = []
            // Iterate over the activities for the next Microcycle and make a GET requests
            // to get their exercises, because they are generated after the activity
            for (let acty = 0; acty < nextMicroActivities.length; acty++) {
                const currentActivity = nextMicroActivities[acty];
                await getActivity(currentActivity.id)
                    .then((res) => {newActivities.push({...res})})
                    .catch((res) => {console.log(res, 'res in error activity get')
                    })
            }
            // Set the Activities for the next Microcycle
            initialActivities = [...newActivities]
        }
    }

    function incrementDate(djangoDate, increment) {
        // To increment correctly and more reliably
        // Transform django format date to js Date object
        const djToJsDate = new Date(djangoDate);
        // Create new Date and Increment it in Miliseconds
        const jsDate = new Date();
        // Increment date with 7 days
        jsDate.setTime(djToJsDate.getTime() + increment * 86400000);
        // Transform JS Date back to Django format
        let day = jsDate.getDate();
        let month = jsDate.getMonth() + 1;
        let year = jsDate.getFullYear();
        const resultDate = `${year}-${month}-${day}`;
        // console.log(resultDate, 'RESULT DATE IN INCREMENT DATE')
        return resultDate;
    }
    // <<<<<===========================================================================>>>>> //
    return (
        <div className={`${styles.periodization}`}>
            {showDeleteMacroModal ?
                <DeleteMacroCycleModal
                    cycle={selectedMacro}
                    onDeleteMacroConfirm={onDeleteMacroConfirm}
                    dispatch={dispatch} />
                : null}
            {showDeleteModal ?
                <DeleteMesoCycleModal
                    cycle={selectedMeso}
                    onDeleteConfirm={onDeleteConfirm}
                    dispatch={dispatch} />
                : null}
            <div className={`content_box ${styles.content_box}`}>
                <div onClick={() => toggleDispatch({ type: 'toggle-macro' })} className={`${styles.cycle_title} ${styles.cycle_box}`}>
                    {selectedMacro ?
                        <div>
                            <DownOutlined
                                style={showMacros ? null : { rotate: '180deg' }} /> MACRO CYCLE: {selectedMacro?.name} </div>
                        : <div><DownOutlined
                            style={showMacros ? null : { rotate: '180deg' }} /> MACRO CYCLES </div>}
                </div>
                <div style={showMacros ? { display: 'none' } : { display: 'flex' }}
                    className={`${styles.macro_box} ${styles.cycle_box}`}>
                    {macroCycles ? macroCycles
                        .sort((a, b) => a.start_date > b.start_date)
                        .map((macro) => <div key={macro.id} onClick={() => {
                            setShowMesos(false);
                            setSelectedMacro(macro);
                            // setShowMacros(true)
                        }}>
                            <MacroCard
                                key={macro.id}
                                macro={macro}
                                onDelete={() => dispatch({ type: 'showMacroDelete' })} />
                        </div>)
                        : null}
                    <PlaceholderCard cycleType={'macro'} />
                </div>
                <div onClick={() => toggleDispatch({ type: 'toggle-meso' })} className={`${styles.cycle_title} ${styles.cycle_box}`}>
                    {selectedMeso ?
                        <div>
                            <DownOutlined
                                style={showMacros ? null : { rotate: '180deg' }} /> MESO CYCLE: {selectedMeso?.name}
                        </div>
                        : <div>
                            <DownOutlined
                                style={showMacros ? null : { rotate: '180deg' }} /> MESO CYCLES
                        </div>}
                </div>
                <div style={showMesos ? { display: 'none' } : { display: 'flex' }}
                    className={`${styles.meso_box} ${styles.cycle_box}`}>
                    {(currentMesoCyclesList) ?
                        currentMesoCyclesList
                            .sort((a, b) => a.start_date > b.start_date)
                            .map((meso) => <div key={meso.id} onClick={() => {
                                setSelectedMeso(meso);
                                setShowMicros(false);
                                setSelectedMicro();
                            }}>
                                <MesoCard
                                    key={meso.id}
                                    meso={meso}
                                    onDelete={() => dispatch({ type: 'showMesoDelete' })} />
                            </div>)
                        : null}
                    <PlaceholderCard cycleType={'meso'} />
                </div>
                <div onClick={() => toggleDispatch({ type: 'toggle-micro' })} className={`${styles.cycle_title} ${styles.cycle_box}`}>
                    <div>
                        <DownOutlined
                            style={showMacros ? null : { rotate: '180deg' }} /> MICRO CYCLES
                    </div>
                </div>
                <div
                    style={showMicros ? { display: 'none' } : { display: 'flex' }}
                    className={`${styles.micro_box} ${styles.cycle_box}`}>
                    {(currentMicroCyclesList) ?
                        currentMicroCyclesList
                            .sort((a, b) => a.start_date > b.start_date)
                            .map((micro) => <div key={micro.id} onClick={() => setSelectedMicro(micro)}>
                                <MicroCard
                                    key={micro.id}
                                    cycle={micro} />
                            </div>)
                        : null}
                </div>
                <div className={`${styles.cycle_title} ${styles.cycle_box}`}>
                    {selectedMicro ?
                        <div>Current Week: {selectedMicro?.name} </div>
                        : <div>Current Week </div>}
                </div>
                <div className={`${styles.micro_edit} ${styles.cycle_box}`}>
                    {selectedMicro?.activities ?
                        <PeriWeek
                            activities={selectedMicro?.activities}
                            selectedMicro={selectedMicro}
                            setSelectedMicro={setSelectedMicro} />
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
                                            type='number' />
                                        <div className={`${styles.week_adjust_3}`}>
                                            <input
                                                value={microCount}
                                                onChange={(e) => setMicroCount(e.target.value)}
                                                type="range"
                                                min="1"
                                                max="52"
                                                className={`${styles.slider}`} />
                                        </div>
                                    </div>

                                    <div className={`${styles.form_field} ${styles.form_field_3}`}>
                                        <div>Activity</div>
                                        <div>Distance</div>
                                        <input
                                                name={'distance'}
                                            value={dataIncrement.distance}
                                            onChange={onValueChange}
                                            className={`${styles.week_adjust_2}`}
                                            min="0"
                                            max="100"
                                            type='number' />
                                            
                                    </div>

                                    <div className={`${styles.form_field} ${styles.form_field_4}`}>
                                    <div>Exercise</div>
                                    <div className={`${styles.exercise_increments_box}`}>
                                        <div className={`${styles.exercise_increment_title}`}>Sets</div>
                                        <input
                                                name={'sets'}
                                                value={dataIncrement.sets}
                                                onChange={onValueChange}
                                                className={`${styles.exercise_increment_input}`}
                                                type='number' 
                                                min="0"
                                                max="100"
                                                />
                                    </div>
                                    <div className={`${styles.exercise_increments_box}`}>
                                        <div className={`${styles.exercise_increment_title}`}>Reps</div>
                                        <input
                                                name={'reps'}
                                                value={dataIncrement.reps}
                                                onChange={onValueChange}
                                                className={`${styles.exercise_increment_input}`}
                                                type='number' 
                                                min="0"
                                                max="100"
                                                />
                                    </div>
                                    <div className={`${styles.exercise_increments_box}`}>
                                        <div className={`${styles.exercise_increment_title}`}>Weight</div>
                                        <input
                                                name={'kg'}
                                                value={dataIncrement.kg}
                                                onChange={onValueChange}
                                                className={`${styles.exercise_increment_input}`}
                                                type='number' 
                                                min="0"
                                                max="100"
                                                />
                                    </div>
                                    </div>
                                    <div className={`${styles.form_field} ${styles.form_field_5}`}>
                                    <button
                                            onClick={(e) => e.preventDefault()}
                                            className={`${styles.button}`}>DELOADING WEAK</button>
                                    </div>
                                    {/* // TODO Change Button to Save when DELOADING WEEK MODAL IN TRUE? */}
                                    <div className={`${styles.form_field} ${styles.form_field_6}`}>
                                        {/* // TODO Are You sure modal? */}
                                        <button
                                            className={`${styles.button}`}> CREATE PERIODIZATION</button>
                                    </div>
                                    <div className={`${styles.form_field} ${styles.form_field_5} ${styles.cancel_button}`}>
                                        <button
                                            onClick={(e) => e.preventDefault()}
                                            className={`${styles.button}`}>RESET</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Periodization