import styles from './CreateExercise.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { createExercise, listExerciseTypes } from '../../../api/exercises'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'


function CreateExercise() {
    const {user} = useContext(UserContext)

    const navigate = useNavigate()
    const [exerciseTypes, setExerciseTypes] = useState([])
    const [formData, setFormData] = useState({
            name: null,
            description: null,
            reps: null,
            sets: null,
            cues: null,
            weights_in_kg: null,
            calories_burned: null,
            type: null,
            user: user.user_id
    })
    useEffect(() => {
        listExerciseTypes()
            .then((res) => {
              setExerciseTypes(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})
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
        <h1>Create Exercise</h1>
            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                <label>Name</label>
                <input
                    value={formData.name}
                    onChange={onValueChange}
                    name='name' 
                    className={styles.form_input}  
                    placeholder='Choose a good name' />
            </div>
            <div className={`${styles.form_field} ${styles.form_field_2}`}>
                <label>Type</label>
                <select 
                        value={formData.type}
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
                    value={formData.description}
                    onChange={onValueChange}
                    name='description'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'></textarea >
            </div>
            <div className={`${styles.form_field} ${styles.form_field_4}`}>
                <label>Cues</label>
                <textarea 
                    value={formData.cues}
                    onChange={onValueChange}

                    name='cues'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Name some cues'></textarea>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_5}`}>
                <label>Reps</label>
                <input 
                    value={formData.reps}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    name='reps'
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Reps?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_6}`}>   
                <label>Sets</label>
                <input 
                    value={formData.sets}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    name='sets'
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Sets?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_7}`}>
                <label>Weights KG</label>
                <input 
                    value={formData.weights_in_kg}
                    onChange={onValueChange}
                    min={0}
                    max={1000}
                    name='weight_in_kg'
                    type={'number'}
                    lassName={styles.form_input}  
                    placeholder='What weights?'></input>
            </div>
            <div className={`${styles.form_field} ${styles.form_field_8}`}>
                <label>Calories</label>
                <input
                    value={formData.calories_burned}
                    onChange={onValueChange}
                    min={0}
                    max={100000}
                    name={'calories_burned'} 
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='Calories burned'></input>
            </div>
            <button
                className={`${styles.form_field} ${styles.form_field_9}`}
             >Create</button>
        </form>
    </section>
  )
}

export default CreateExercise
