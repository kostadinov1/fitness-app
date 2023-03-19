import styles from './CreateExercise.module.css'
import React, { useEffect, useState } from 'react'
import { createExercise, listExerciseTypes } from '../../../api/exercises'
import { useNavigate } from 'react-router-dom'


function CreateExercise() {
    
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
    })
    useEffect(() => {
        listExerciseTypes()
            .then((res) => {
              setExerciseTypes(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})
    }, [])

    const onCreate = (e) => {
        e.preventDefault()
        createExercise(formData)
        navigate('/all-exercises')
    }
    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    } 


    return (
        <section className={styles.create_exercise}>
      <div className={styles.form_box}>
        <h1>Create Exercise</h1>
        <form onSubmit={onCreate} className={styles.form}>
            <div className={styles.name_type}>
                <label>Name</label>
                <input
                    value={formData.name}
                    onChange={onValueChange}
                    name='name' 
                    className={styles.form_input}  
                    placeholder='Choose a good name' />
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
            <div className={styles.texts}>
                <label>Description</label>
                <textarea 
                    value={formData.description}
                    onChange={onValueChange}

                    name='description'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'></textarea >
                <label>Cues</label>
                <textarea 
                    value={formData.cues}
                    onChange={onValueChange}

                    name='cues'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Name some cues'></textarea>
            </div>
            <div className={styles.numbers}>
                <label>Reps</label>
                <input 
                    value={formData.reps}
                    onChange={onValueChange}

                    name='reps'
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Reps?'></input>

                <label>Sets</label>
                <input 
                    value={formData.sets}
                    onChange={onValueChange}

                    name='sets'
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='How many Sets?'></input>
                <label>Weights KG</label>
                <input 
                    value={formData.weights_in_kg}
                    onChange={onValueChange}

                    name='weight_in_kg'
                    type={'number'}
                    lassName={styles.form_input}  
                    placeholder='What weights?'></input>
                <label>Calories</label>
                <input
                    value={formData.calories_burned}
                    onChange={onValueChange}

                    name={'calories_burned'} 
                    type={'number'}
                    className={styles.form_input}  
                    placeholder='Calories burned'></input>
            </div>
            {/* <div className={styles.image}>
                <label>Image</label>
                <input
                    // value={formData.image}
                    // onChange={(e)=> {setFormData({"image": e.target.value})}}
                    name='image' 
                    type={'file'}
                    className={styles.form_input}
                    placeholder='Upload Image'></input>
            </div>            */}

            <button >Create</button>
        </form>

      </div>
    </section>
  )
}

export default CreateExercise
