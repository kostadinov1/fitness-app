import styles from './CreateActivity.module.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateActivity() {
  
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
            // name: "demo exercise",
            // description: "optimal progress",
            // reps: 1,
            // sets: 1,
            // cues: "optimal progress",
            // weights_in_kg: 1,
            // calories_burned: 1,
            // type: null,
    })
    const onCreate = (e) => {
        e.preventDefault()
        // createExercise(formData)
        navigate('/')
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
                    type={''} 
                    className={styles.form_input}>
                    <option value={"1"}>Bodyweight </option>
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
            <button>Create</button>
        </form>

      </div>
    </section>
  )
}

export default CreateActivity
