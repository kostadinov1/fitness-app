import styles from './CreateExercise.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { createExercise } from '../../../api/exercises'
import { getAllActivities } from '../../../api/activities'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { listExerciseTypes } from '../../../api/exerciseTypes'
import ListCard from '../../Cards/ListCard/ListCard'


function CreateExercise() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [exerciseTypes, setExerciseTypes] = useState([])
    const [activities, setActivities] = useState([])
    const [formError, setFormError] = useState(false)


    const [formData, setFormData] = useState({
            name: '',
            description: '',
            reps: 0,
            sets: 0,
            cues: '',
            weights_in_kg: 0,
            calories_burned: 0,
            type: undefined,
            activity: undefined,
            user: user.user_id
    })

    useEffect(() => {
        listExerciseTypes()
            .then((res) => {
              setExerciseTypes(res)})
            .catch((res) => {})
        getAllActivities(user)
            .then((res) => {
                setActivities(res)})            
            .catch((res) => {console.log('res', res)})
    }, [user, ])

    const onCreate = (e) => {
        e.preventDefault()
        createExercise(user, formData)
            .then((res) => {
                console.log('res in onCreate', res)
                navigate('/all-exercises')
            })
            .catch((res) => {
                console.log('error catch in onCreate', res)
            })
    }

    const onValueChange = (e) => {

        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    } 

    
    return (

        <section className={styles.create_exercise}>

            <div className={`${styles.sider_1}`}>
                <ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
            </div>
            <div className={`${styles.create_box}`}>

        <form onSubmit={onCreate} className={styles.form}>
            <div className={` ${styles.form_field_11} ${'title_outlined'}`}>
            Create Exercise
                </div>
            <div className={`${styles.form_field} ${styles.form_field_1}`}>
                <label>Name</label>
                    {formData.name === '' ?
                         <span className={`${styles.form_error}`}>
                            You need to enter name
                          </span> 
                        : null}
                <input
                    name='name' 
                    value={formData.name}
                    onChange={onValueChange}
                    className={styles.form_input}  
                    placeholder='Choose Name' />
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
                    placeholder='Please enter short description'></textarea >
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
                    placeholder='0-1000'></input>
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
                    placeholder='0-1000'></input>
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
                    className={styles.form_input}  
                    placeholder='0-1000'></input>
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
                    placeholder='0-100000'></input>
            </div>

            <button className={`${styles.form_field} ${styles.form_field_9}`}>
                Create
            </button>


            <div className={`${styles.form_field} ${styles.form_field_10}`}>
                <label>Related Activity</label>
                <select
                    //TODO not able to choose the first option if its is just one in the list
                    value={formData.activity}
                    onChange={onValueChange}
                    name='activity'
                    className={styles.form_input}>
                        { activities ? 
                        activities.map((activity) =>
                        <option value={activity.id} key={activity.id}>{activity.name}_____ Micro: {activity.micro_cycle?.name}</option>)
                        : <option>No Activities yet</option>}
                </select>
            </div>
        </form>
        </div>

    </section>
  )
}

export default CreateExercise
