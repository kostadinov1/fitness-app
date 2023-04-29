import styles from './EditActivity.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editActivity, getActivity } from '../../../api/activities'
import { UserContext } from '../../../contexts/UserContext'
import { listActivityTypes } from '../../../api/activityTypes'
import UsefulLinksCard from '../../Cards/UsefulLinksCard/UsefulLinksCard'
import ListCard from '../../Cards/ListCard/ListCard'
import { DatePicker, Radio } from 'antd'


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
    const onDateChangeHandler = (date, dateString) => {
        setActivity((state) => ({...state, start_time: dateString[0]}))
        setActivity((state) => ({...state, end_time: dateString[1]}))

	}

    // TODO ADD FORM VALIDAITONS

    return (
        <section className={styles.edit_activity}>
               
            <div className={`${styles.sider_1}`}>
                <ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
                <UsefulLinksCard></UsefulLinksCard>
            </div>
            <div className={`${styles.edit_box}`}>

                <div className={styles.form_box}>
                <h1 className={`title_outlined`}>Edit Activity</h1>
                <form onSubmit={onEdit} className={styles.form}>
        
                        <div className={`${styles.form_input} ${styles.form_item_box_1} ${styles.item}`}>
                            <label>
                                Name
                                </label>
                                {activity.name === '' ?
                                <span className={`${styles.form_error}`}>
                                    You need to enter name
                                </span> 
                                : null}
                            <input
                                name='name' 
                                value={activity.name}
                                onChange={onValueChange}
                                className={styles.form_input}  
                                placeholder='Choose a good name' />
                        </div>
        
                        <div className={`${styles.form_input} ${styles.form_item_box_2} ${styles.item}`}>
                                {/* TODO : create request activityType: str need id? */}
                            <label>
                                Type
                                </label>
                            <select 
                                name='type'
                                value={activity.type}
                                onChange={onValueChange}
                                className={styles.form_input}>
                                    { activityTypes ? 
                                    activityTypes.map((activityType) =>
                                        <option 
                                            key={activityType.id}
                                            value={`${activityType.id}`}>{activityType.name}</option>)
                                        : <option>No Types yet</option>}
                            </select>
                        </div>
        
                        <div className={`${styles.form_input} ${styles.form_item_box_3} ${styles.item}`}>
                            <label>
                                Description
                                </label>
                            <textarea 
                                name='description'
                                value={activity.description}
                                onChange={onValueChange}
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
                                name='duration'  
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
                                name='distance'  
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
                                name='pace'
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
                                name='speed'
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
                                name='heart_rate'
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
                                name='rpe'
                                value={activity.rpe}
                                onChange={onValueChange}
                                type={'number'}
                                min={0}
                                max={10}
                                placeholder='0'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_10} ${styles.item}`}>
                        <label>Start Date</label>
                        <DatePicker
                            name='start_time'
                            // value={formData.start_time}
							onChange={onDateChangeHandler}
							status="warning"
							style={{
								width: '100%',
							}}
                            />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_11} ${styles.item}`}>
                        <label>Public</label>
                             <Radio.Group
                                name='public'
                                onChange={onValueChange}
                                defaultValue="false"
                                buttonStyle="solid"
                                size='small'
                                >
                                <Radio.Button value="true">Public</Radio.Button>
                                <Radio.Button value="false">Private</Radio.Button>
                                </Radio.Group>
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_12} ${styles.item}`}>
                        <label>Complete</label>
                        <Radio.Group
                                name='complete'
                                onChange={onValueChange}
                                defaultValue={activity.complete}
                                buttonStyle="solid"
                                size='small'
                                >
                                    <Radio.Button value="true">True</Radio.Button>
                                    <Radio.Button value="false">False</Radio.Button>
                                </Radio.Group>

                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_13} ${styles.item}`}>
                        <label>Intensity</label>
                        <input 
                            name='intensity'
                            type={'number'}
                            value={activity.intensity}
                            onChange={onValueChange}
                            min={0}
                            max={100}
                            placeholder='0-100%'
                            />

                        </div>
                    <button  className={`${styles.form_num_input} ${styles.form_item_box_14} ${styles.item}`}>
                        Edit
                    </button>

                </form>
                </div>
        </div>
    </section>
  )
  }

export default EditActivity
