import styles from './CreateActivity.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createActivity } from '../../../api/activities'
import { UserContext } from '../../../contexts/UserContext'
import { listActivityTypes } from '../../../api/activityTypes'
import ListCard from '../../Cards/ListCard/ListCard'
import UsefulLinksCard from '../../Cards/UsefulLinksCard/UsefulLinksCard'

function CreateActivity() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    const [activityTypes, setActivityTypes] = useState([])
  
    const [formData, setFormData] = useState({
            name: '',
            duration: 0,
            description: '',
            distance: 0,
            pace: 0,
            speed: 0,
            heart_rate: 0,
            rpe: 0,
            exercises: null,
            type: undefined,
            goal: undefined,
            microcycle: undefined,
            user: user.user_id
    })

  useEffect(() => {
      listActivityTypes()
          .then((res) => {
            setActivityTypes(res)})
          .catch((res) => {})
  }, [])
    const onCreate = (e) => {
        e.preventDefault()
        createActivity(user, formData)
            .then((res) => {})
            .catch((res) => {})
        navigate('/all-activities')
    }
    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }

    // TODO ADD FORM VALIDAITONS
    return (
      <section className={styles.create_activity}>
   
        <div className={`${styles.sider_1}`}>
            <ListCard></ListCard>
        </div>
        <div className={styles.sider_2}>
            <UsefulLinksCard></UsefulLinksCard>
        </div>
        <div className={`${styles.create_box}`}>
            <div className={styles.form_box}>
                <h1 className={`title_outlined`}>Create Activity</h1>
                <form onSubmit={onCreate} className={styles.form}>
                        <div className={`${styles.form_input} ${styles.form_item_box_1} ${styles.item}`}>
                            <label>Name</label>
                                {formData.name === '' ?
                                <span className={`${styles.form_error}`}>
                                    You need to enter name
                                </span> 
                                : null}
                            <input
                                value={formData.name}
                                onChange={onValueChange}
                                name='name' 
                                className={styles.form_input}  
                                placeholder='Choose a good name' />
                        </div>
                        <div className={`${styles.form_input} ${styles.form_item_box_2} ${styles.item}`}>
                            <label>Type</label>
                            <select 
                                value={formData.type}
                                onChange={onValueChange}
                                name='type'
                                className={styles.form_input}>
                                    { activityTypes ? 
                                    activityTypes.map((activityType) =>
                                        <option key={activityType.id} value={`${activityType.id}`}>{activityType.name}</option>)
                                        : <option>No Types yet</option>}
                            </select>
                        </div>
                        <div className={`${styles.form_input} ${styles.form_item_box_3} ${styles.item}`}>
                            <label>Description</label>
                            <textarea 
                                value={formData.description}
                                onChange={onValueChange}
                                name='description'
                                type={'text'} 
                                className={styles.form_input}  
                                placeholder='Short Description'>
                            </textarea >
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_4} ${styles.item}`}>
                            <label>Duration</label>
                            <input 
                                value={formData.duration}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={1000}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_5} ${styles.item}`}>
                            <label>Distance</label>
                            <input 
                                value={formData.distance}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={10000000}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_6} ${styles.item}`}>
                            <label>Pace</label>
                            <input 
                                value={formData.pace}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={20}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_7} ${styles.item}`}>
                            <label>Speed</label>
                            <input 
                                value={formData.speed}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={1000}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_8} ${styles.item}`}>
                            <label>Heart Rate</label>
                            <input 
                                value={formData.heart_rate}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={220}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_9} ${styles.item}`}>
                            <label>RPE</label>
                            <input 
                                value={formData.rpe}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={10}
                                placeholder='0'
                                />
                        </div>
                    <button  className={`${styles.form_num_input} ${styles.form_item_box_10} ${styles.item}`}>
                        Create
                    </button>
                </form>
            </div>
      </div>
    </section>
  )
  }


export default CreateActivity
