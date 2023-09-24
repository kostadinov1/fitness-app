import styles from './EditExercise.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { editExercise, getExercise } from '../../../api/exercises'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { getAllActivities } from '../../../api/activities'
import { listExerciseTypes } from '../../../api/exerciseTypes'
import ListCard from '../../Cards/ListCard/ListCard'


function EditExercise() {
    const {id} = useParams()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [exercise, setExercise] = useState({
        name: '',
        description: '',
        reps: 0,
        sets: 0,
        cues: '',
        weights_in_kg: 0,
        calories_burned: 0,
        type: undefined,
        // TODO Selecet element can NOT select activy if array.length === 1
        activity: undefined,
        user: user.user_id
    })
    const [exerciseTypes, setExerciseTypes] = useState([])
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getExercise(id)
            .then((res) => { setExercise(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})

        listExerciseTypes()
            .then((res) => { setExerciseTypes(res)
                        console.log(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})

        getAllActivities(user)
            .then((res) => setActivities(res))            
            .catch((res) => {console.log('res', res)})
    }, [user, id])

    const onEdit = (e) => {
        e.preventDefault()
        editExercise(user, id, {...exercise, user: user.user_id})
        navigate('/all-exercises')
    }
    const onValueChange = (e) => {
        setExercise((state) => ({...state, [e.target.name]: e.target.value}))
    } 

    // TODO ADD FORM VALIDAITONS
    
    return (
        <section className={styles.edit_exercise}>
              <div className={`${styles.sider_1}`}>
                <ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
            </div>
            <div className={`${styles.edit_box}`}>
            
        <form onSubmit={onEdit} className={styles.form}>
            <div className={`${'title_outlined'}  ${styles.form_field_11} `}>
            Edit Exercise
            </div>
            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                <label>Name</label>
                {exercise.name === '' ?
                                <span className={`${styles.form_error}`}>
                                    You need to enter name
                                </span> 
                                : null}
                <input
                    name='name' 
                    value={exercise.name}
                    onChange={onValueChange}
                    className={styles.form_input}  
                    placeholder='Choose a good name' />
            </div>
            <div className={`${styles.form_field} ${styles.form_field_2}`}>
                <label>Type</label>
                <select 
                        value={exercise.type}
                        onChange={onValueChange}
                        name='type'
                        className={styles.form_input}>
                            { exerciseTypes ? 
                            exerciseTypes.map((exerciseType) =>
                            <option value={`${exerciseType.id}`} key={exerciseType.id}>{exerciseType.name}</option>)
                            : <option>No Types yet</option>}
                </select>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_3}`}>   
                <label>Description</label>
                <textarea 
                    name='description'
                    value={exercise.description}
                    onChange={onValueChange}
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'></textarea >
            </div>
            <div className={`${styles.form_field} ${styles.form_field_4}`}>
                <label>Cues</label>
                <textarea 
                    name='cues'
                    value={exercise.cues}
                    onChange={onValueChange}
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Name some cues'></textarea>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_5}`}>
                <label>Reps</label>
                <input 
                    name='reps'
                    value={exercise.reps}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Reps?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_6}`}>   
                <label>Sets</label>
                <input 
                    name='sets'
                    value={exercise.sets}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Sets?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_7}`}>
                <label>Weights KG</label>
                <input 
                    name='weights_in_kg'
                    value={exercise.weights_in_kg}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='What weights?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_8}`}>
                <label>Calories</label>
                <input
                    name={'calories_burned'} 
                    value={exercise.calories_burned}
                    onChange={onValueChange}
                    min={0}
                    max={100000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='0-100000'></input>
            </div>
            <button className={`${styles.form_field} ${styles.form_field_9}`}>
                Edit
             </button>

<div className={`${styles.form_field} ${styles.form_field_10}`}>
                <label>Activity</label>
                <select 
                    name='activity'
                    value={exercise.activity}
                    onChange={onValueChange}
                    className={styles.form_input}>
                        { activities ? 
                        activities.map((activity) =>
                        <option value={activity.id} key={activity.id}>{activity.name}</option>)
                        : <option>No Activities yet</option>}
                </select>
            </div>
        </form>
        </div>
    </section>
  )
}

export default EditExercise
