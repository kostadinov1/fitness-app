import styles from './CreateActivity.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createActivity } from '../../../api/activities'
import { UserContext } from '../../../contexts/UserContext'
import { listActivityTypes } from '../../../api/activityTypes'
import ListCard from '../../Cards/ListCard/ListCard'
import { DatePicker, Radio } from 'antd'
import { getAllMicroCycles} from './../../../api/cycles/microCycle'
function CreateActivity() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const [microCycles, setMicroCycles] = useState([])
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
            intensity: 0,
            complete: undefined,
            public: undefined,
            exercises: undefined,
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
    getAllMicroCycles()
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
	const onDateChangeHandler = (date, dateString) => {
        console.log(date, dateString, 'ondatechangehandler')
        setFormData((state) => ({...state, start_time: dateString}))
        // setFormData((state) => ({...state, end_time: dateString[1]}))
	}


    // TODO ADD FORM VALIDATIONS
    return (
      <section className={styles.create_activity}>
   
        <div className={`${styles.sider_1}`}>
            <ListCard></ListCard>
        </div>
        <div className={styles.sider_2}>
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
                                name='type'
                                value={formData.type}
                                onChange={onValueChange}
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
                                name='duration'
                                type={'number'}
                                value={formData.duration}
                                onChange={onValueChange}
                                min={0}
                                max={1000}
                                placeholder='0-1000'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_5} ${styles.item}`}>
                            <label>Distance</label>
                            <input 
                                name='distance'
                                type={'number'}
                                value={formData.distance}
                                onChange={onValueChange}
                                min={0}
                                max={10000000}
                                placeholder='0-10000000'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_6} ${styles.item}`}>
                            <label>Pace</label>
                            <input 
                                name='pace'
                                type={'number'}
                                value={formData.pace}
                                onChange={onValueChange}
                                min={0}
                                max={20}
                                placeholder='0-20'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_7} ${styles.item}`}>
                            <label>Speed</label>
                            <input 
                                name='speed'
                                type={'number'}
                                value={formData.speed}
                                onChange={onValueChange}
                                min={0}
                                max={1000}
                                placeholder='0-1000'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_8} ${styles.item}`}>
                            <label>Heart Rate</label>
                            <input 
                                name='hear_rate'
                                type={'number'}
                                value={formData.heart_rate}
                                onChange={onValueChange}
                                min={0}
                                max={220}
                                placeholder='0-220'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_9} ${styles.item}`}>
                            <label>RPE</label>
                            <input 
                                name='rpe'
                                type={'number'}
                                value={formData.rpe}
                                onChange={onValueChange}
                                min={0}
                                max={10}
                                placeholder='0-10'
                                />
                        </div>
                        <div className={`${styles.form_num_input} ${styles.form_item_box_10} ${styles.item}`}>
                        <label>Start Date</label>
                        <DatePicker
                            name='start_time'
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
                                defaultValue="false"
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
                            value={formData.intensity}
                            onChange={onValueChange}
                            min={0}
                            max={100}
                            placeholder='0-100%'
                            />

                        </div>
                    <button  className={`${styles.form_num_input} ${styles.form_item_box_14} ${styles.item}`}>
                        Create
                    </button>
                </form>
            </div>
      </div>
    </section>
  )
  }


export default CreateActivity
