import styles from './EditExercise.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { editExercise, getExercise, listExerciseTypes } from '../../../api/exercises'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { getAllActivities } from '../../../api/activities'


function EditExercise() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [exercise, setExercise] = useState({})
    const [exerciseTypes, setExerciseTypes] = useState([])
    const { user } = useContext(UserContext)
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
    }, [])

    const onEdit = (e) => {
        e.preventDefault()
        editExercise(user, id, {...exercise, user: user.user_id})
        navigate('/all-exercises')
    }
    const onValueChange = (e) => {
        setExercise((state) => ({...state, [e.target.name]: e.target.value}))
    } 

    
    return (
        <section className={styles.edit_exercise}>
        <form onSubmit={onEdit} className={styles.form}>
        <div className={`${styles.form_field} ${styles.form_field_11} ${'title_outlined'}`}>
            Edit Exercise
                </div>
            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                <label>Name</label>
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
                            <option value={`${exerciseType.id}`}>{exerciseType.name}</option>)
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
                    lassName={styles.form_input}  
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
                    placeholder='Calories burned'></input>
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
                        <option value={activity.id}>{activity.name}</option>)
                        : <option>No Activities yet</option>}
                </select>
            </div>
        </form>
    </section>
  )
}

export default EditExercise
