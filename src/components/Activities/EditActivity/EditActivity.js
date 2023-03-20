import styles from './EditActivity.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editActivity, getActivity, listActivityTypes } from '../../../api/activities'
import { UserContext } from '../../../contexts/UserContext'


function EditActivity() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [activity, setActivity] = useState({})
    const [activityTypes, setActivityTypes] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        getActivity(id)
            .then((res) => { setActivity(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})
        listActivityTypes()
            .then((res) => { setActivityTypes(res)})
            .catch((res) => { console.log('___IN___ useEffect:', res)})
    }, [])
    const onEdit = (e) => {
        e.preventDefault()
        editActivity(user, Number(id), {...activity, user:user.user_id})
        navigate('/all-activities')
        
    }
    const onValueChange = (e) => {
        setActivity((state) => ({...state, [e.target.name]: e.target.value}))
    } 


    return (
        <section className={styles.edit_activity}>
        <div className={styles.form_box}>
          <h1>Edit Activity</h1>
          <form onSubmit={onEdit} className={styles.form}>
  
                  <div className={`${styles.form_input} ${styles.form_item_box_1} ${styles.item}`}>
                      <label>
                          Name
                          </label>
                      <input
                          value={activity.name}
                          onChange={onValueChange}
                          name='name' 
                          className={styles.form_input}  
                          placeholder='Choose a good name' />
                  </div>
  
                  <div className={`${styles.form_input} ${styles.form_item_box_2} ${styles.item}`}>
                          {/* TODO : create request activityType: str need id? */}
                      <label>
                          Type
                          </label>
                      <select 
                          value={activity.type}
                          onChange={onValueChange}
                          name='type'
                          className={styles.form_input}>
                              { activityTypes ? 
                              activityTypes.map((activityType) =>
                                  <option value={`${activityType.id}`}>{activityType.name}</option>)
                                  : <option>No Types yet</option>}
                      </select>
                  </div>
  
                  <div className={`${styles.form_input} ${styles.form_item_box_3} ${styles.item}`}>
                      <label>
                          Description
                          </label>
                      <textarea 
                          value={activity.description}
                          onChange={onValueChange}
                          name='description'
                          type={'text'} 
                          className={styles.form_input}  
                          placeholder='Short Description'>
                      </textarea >
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_4} ${styles.item}`}>
                      <label>
                          Duration
                          </label>
                      <input 
                          value={activity.duration}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={1000}
                          placeholder='0'
                          />
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_5} ${styles.item}`}>
                      <label>
                          Distance
                          </label>
                      <input 
                          value={activity.distance}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={10000000}
                          placeholder='0'
                          />
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_6} ${styles.item}`}>
                      <label>
                          Pace
                          </label>
                      <input 
                          value={activity.pace}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={20}
                          placeholder='0'
                          />
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_7} ${styles.item}`}>
                      <label>
                          Speed
                          </label>
                      <input 
                          value={activity.speed}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={1000}
                          placeholder='0'
                          />
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_8} ${styles.item}`}>
                      <label>
                      Heart Rate
                      </label>
                      <input 
                          value={activity.heart_rate}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={220}
                          placeholder='0'
                          />
                  </div>
  
                  <div className={`${styles.form_num_input} ${styles.form_item_box_9} ${styles.item}`}>
                      <label>
                          RPE
                          </label>
                      <input 
                          value={activity.rpe}
                          onChange={onValueChange}
                          type={'number'}
                          min={0}
                          max={10}
                          placeholder='0'
                          />
                  </div>
  
              <button  className={`${styles.form_num_input} ${styles.form_item_box_10} ${styles.item}`}>
                  Edit
              </button>
  
          </form>
    
        </div>
    </section>
  )
  }

export default EditActivity
