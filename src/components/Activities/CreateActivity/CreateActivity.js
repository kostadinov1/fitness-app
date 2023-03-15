import styles from './CreateActivity.module.css'

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createActivity, getActivity, listActivityTypes } from '../../../api/activities'

function CreateActivity() {
    const navigate = useNavigate()
    const [activity, setActivity] = useState({})
    const [activityTypes, setActivityTypes] = useState([])
    console.log(activity)
  
    const [formData, setFormData] = useState({
            name: "demo exercise",
            duration: null,
            description: null,
            distance: null,
            pace: null,
            speed: null,
            heart_rate: null,
            rpe: null,
            exercises: null,
            type: null,
            goal: null,
            microcycle: null,

    })


  useEffect(() => {


      listActivityTypes()
          .then((res) => { setActivityTypes(res)})
          .catch((res) => { console.log('___IN___ useEffect:', res)})
  }, [])
    const onCreate = (e) => {
        e.preventDefault()
        createActivity(formData)
        .then((res) => { setActivity(res)})
        .catch((res) => { console.log('___IN___ useEffect:', res)})
        navigate('/')
    }
    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    } 


    return (
        <section className={styles.create_activity}>
      <div className={styles.form_box}>
        <h1>Create Activity</h1>
        <form onSubmit={onCreate} className={styles.form}>
                
                <label>Name</label>
                <input
                    value={activity.name}
                    onChange={onValueChange}
                    name='name' 
                    className={styles.form_input}  
                    placeholder='Choose a good name' />

                <label>Type</label>
                {/* <select 
                    value={activity.type}
                    onChange={onValueChange}
                    name='type'
                    type={''} 
                    className={styles.form_input}>
                        { activityTypes ? 
                        activityTypes.map((ActivityType) =>
                                         <option value={`${ActivityType.name}`}>{ActivityType.name}</option>)
                        : <option>No Types yet</option>
                        }
                </select> */}

                <label>Description</label>
                <textarea 
                    value={activity.description}
                    onChange={onValueChange}
                    name='description'
                    type={'text'} 
                    className={styles.form_input}  
                    placeholder='Short Description'>
                </textarea >

                <label>Duration</label>
                <input 
                    value={activity.duration}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
                <label>Distance</label>
                <input 
                    value={activity.distance}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
                <label>Pace</label>
                <input 
                    value={activity.pace}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
                <label>Speed</label>
                <input 
                    value={activity.speed}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
                <label>Heart Rate</label>
                <input 
                    value={activity.heart_rate}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
                <label>RPE</label>
                <input 
                    value={activity.rpe}
                    onChange={onValueChange}
                    type={'number'}
                    placeholder='0'
                />
            <button >Create</button>
        </form>
  
      </div>
    </section>
  )
  }


export default CreateActivity
