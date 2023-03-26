import styles from './CreateExercise.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { createExercise, listExerciseTypes } from '../../../api/exercises'
import { getAllActivities } from '../../../api/activities'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'


function CreateExercise() {
    const {user} = useContext(UserContext)

    const navigate = useNavigate()
    const [exerciseTypes, setExerciseTypes] = useState([])


    const [activities, setActivities] = useState([])



    const [formData, setFormData] = useState({
            name: null,
            description: null,
            reps: null,
            sets: null,
            cues: null,
            weights_in_kg: null,
            calories_burned: null,
            type: null,
            activity: null,
            user: user.user_id
    })
    useEffect(() => {
        listExerciseTypes()
            .then((res) => {
              setExerciseTypes(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})
        getAllActivities(user)
            .then((res) => setActivities(res))            
            .catch((res) => {console.log('res', res)})
    }, [])

    const onCreate = (e) => {
        e.preventDefault()
        createExercise(user, formData)
        navigate('/all-exercises')
    }
    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    } 

    
    return (

        <section className={styles.create_exercise}>
        <form onSubmit={onCreate} className={styles.form}>
            <div className={`${styles.form_field} ${styles.form_field_11} ${'title_outlined'}`}>
            Create Exercise
                </div>
            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                <label>Name</label>
                <input
                    name='name' 
                    value={formData.name}
                    onChange={onValueChange}
                    className={styles.form_input}  
                    placeholder='Choose a good name' />
            </div>
            
            <div className={`${styles.form_field} ${styles.form_field_2}`}>
                <label>Type</label>
                <select 
                        name='type'
                        value={formData.type}
                        onChange={onValueChange}
                        className={styles.form_input}>
                            { exerciseTypes ? 
                            exerciseTypes.map((exerciseType) =>
                            <option value={exerciseType.name} key={exerciseType.id}>{exerciseType.name}</option>)
                            : <option>No Types yet</option>}
                </select>
            </div>

            <div className={`${styles.form_field} ${styles.form_field_3}`}>   
                <label>Description</label>
                <textarea 
                    name='description'
                    value={formData.description}
                    onChange={onValueChange}
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'></textarea >
            </div>
            <div className={`${styles.form_field} ${styles.form_field_4}`}>
                <label>Cues</label>
                <textarea 
                    name='cues'
                    value={formData.cues}
                    onChange={onValueChange}
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Name some cues'></textarea>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_5}`}>
                <label>Reps</label>
                <input 
                    name='reps'
                    value={formData.reps}
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
                    value={formData.sets}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Sets?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_7}`}>
                <label>Total Weights KG</label>
                <input 
                    name='weights_in_kg'
                    value={formData.weights_in_kg}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    type={'number'}
                    lassName={styles.form_input}  
                    placeholder='What weights?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_8}`}>
                <label>Total Calories</label>
                <input
                    name={'calories_burned'} 
                    value={formData.calories_burned}
                    onChange={onValueChange}
                    min={0}
                    max={100000}
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='Calories burned'></input>
            </div>

            <button className={`${styles.form_field} ${styles.form_field_9}`}>
                Create
            </button>


            <div className={`${styles.form_field} ${styles.form_field_10}`}>
                <label>Related Activity</label>
                <select 
                    value={formData.activity}
                    onChange={onValueChange}
                    name='activity'
                    className={styles.form_input}>
                        { activities ? 
                        activities.map((activity) =>
                        <option value={activity.id} key={activity.id}>{activity.name}</option>)
                        : <option>No Activities yet</option>}
                </select>
            </div>
        </form>
    </section>
  )
}

export default CreateExercise
