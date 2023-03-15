

import styles from './EditExercise.module.css'
import React, { useEffect, useState } from 'react'
import { editExercise, getExercise } from '../../../api/exercises'
import { useNavigate, useParams } from 'react-router-dom'


function EditExercise() {
    const {id} = useParams()
    const [exercise, setExercise] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getExercise(id)
        .then((res) => { setExercise(res)})
        .catch((res) => { console.log('___IN___ useEffect:', res)})
    }, [])

    const onEdit = (e) => {
        e.preventDefault()
        editExercise(id, exercise)
        navigate('/all-exercises')
    }
    const onValueChange = (e) => {
        setExercise((state) => ({...state, [e.target.name]: e.target.value}))
    } 


    return (
        <section className={styles.create_exercise}>
      <div className={styles.form_box}>
        <h1>Edit Exercise</h1>
        <form onSubmit={onEdit} className={styles.form}>
            <div className={styles.name_type}>
                <label>Name</label>
                <input
                    value={exercise.name}
                    onChange={onValueChange}
                    name='name' 
                    className={styles.form_input}  
                    placeholder='Choose a good name' />
                <label>Type</label>
                <select 
                    value={exercise.type}
                    onChange={onValueChange}
                    name='type'
                    type={''} 
                    className={styles.form_input}>
                    <option value={"1"}>Bodyweight </option>
                    <option value={"Kayaking"}>Kayaking </option>
                    <option value={"Climbing"}>Climbing </option>
                    <option value={"Hiking"}>Hiking </option>
                    <option value={"Swimming"}>Swimming </option>
                    <option value={"Running"}>Running</option>
                    <option value={"Resistance Training"}>Resistance Training</option>
                </select>
            </div>
            <div className={styles.texts}>
                <label>Description</label>
                <textarea 
                    value={exercise.description}
                    onChange={onValueChange}

                    name='description'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'></textarea >
                <label>Cues</label>
                <textarea 
                    value={exercise.cues}
                    onChange={onValueChange}

                    name='cues'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Name some cues'></textarea>
            </div>
            <div className={styles.numbers}>
                <label>Reps</label>
                <input 
                    value={exercise.reps}
                    onChange={onValueChange}

                    name='reps'
                    type={'number'}
                    className={styles.form_input}></input>

                <label>Sets</label>
                <input 
                    value={exercise.sets}
                    onChange={onValueChange}

                    name='sets'
                    type={'number'}
                    className={styles.form_input}></input>
                <label>Weights KG</label>
                <input 
                    value={exercise.weights_in_kg}
                    onChange={onValueChange}

                    name='weight_in_kg'
                    type={'number'}
                    lassName={styles.form_input}></input>
                <label>Calories</label>
                <input
                    value={exercise.calories_burned}
                    onChange={onValueChange}

                    name={'calories_burned'} 
                    type={'number'}
                    className={styles.form_input}></input>
            </div>
            {/* <div className={styles.image}>
                <label>Image</label>
                <input
                    // value={exercise.image}
                    // onChange={(e)=> {setFormData({"image": e.target.value})}}
                    name='image' 
                    type={'file'}
                    className={styles.form_input}
                    placeholder='Upload Image'></input>
            </div>            */}

            <button>Edit</button>
        </form>

      </div>
    </section>
  )
}

export default EditExercise
