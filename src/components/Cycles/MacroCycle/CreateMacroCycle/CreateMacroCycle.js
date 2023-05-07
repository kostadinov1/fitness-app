
import styles from './CreateMacroCycle.module.css'
import React, { useContext, useState, useEffect } from 'react'
import ListCard from '../../../Cards/ListCard/ListCard'
import { UserContext } from '../../../../contexts/UserContext'
import { DatePicker } from 'antd'
import { getAllGoals } from '../../../../api/goals'
import { createMacroCycle } from '../../../../api/cycles/macroCycle'
import { useNavigate } from 'react-router-dom'

function CreateMacroCycle() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    // TODO get all goals to a create choice field
    const [goals, setGoals] = useState([])
    const [formData, setFormData] = useState({
        name: undefined,
        start_date: undefined,
        end_date: undefined,
        description: undefined, 
        goals: undefined,
        user: user.user_id
    })

    useEffect(() => {
        getAllGoals(user)
            .then((res) => {setGoals(res)})
            .catch((res) => {})
        
    }, [user])

    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }
	const onStartDateChangeHandler = (date, dateString) => {
        console.log(date, dateString, 'date datestring');
        setFormData((state) => ({...state, start_date: dateString}))
	}
    const onEndDateChangeHandler = (date, dateString) => {
        setFormData((state) => ({...state, end_date: dateString}))
	}
    const onSubmitHandler = (e) => {
        e.preventDefault()

        createMacroCycle(user, formData)
            .then((res) => {
                navigate('/')
            })
            .catch((res) => {})
    }

    return (
        <div className={`${styles.create_macro} sidebar_layout` }>
            <div className={`sidebar_box`}>
                <ListCard></ListCard>
            </div>
            <div className={`content_box`}>
                <form 
                    onSubmit={onSubmitHandler}
                    className={`${styles.form}`}>
                    <div className={`${styles.form_field} ${styles.form_field_1}`}>
                        <label>Name</label>
                        <input 
                            name='name'
                            value={formData.name}
                            onChange={onValueChange}
                            placeholder={'Enter Macro Cycle Name'}
                        />
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_2}`}>
                        <label>Start Date</label>
                        <DatePicker
                            name='start_date'
                            // value={formData.start_date}
							onChange={onStartDateChangeHandler}
							status="warning"
							style={{
								width: '100%',
							}}
                            />
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_3}`}>
                        <label>End Date</label>
                        <DatePicker
                            name='end_date'
                            // value={formData.end_date}
							onChange={onEndDateChangeHandler}
							status="warning"
							style={{
								width: '100%',
							}}
                            />
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_4}`}>
                        <label>Description</label>
                        <textarea
                        name='description'
                        value={formData.description}
                        onChange={onValueChange}
                        placeholder={'Describe Cycle'}                        
                        />
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_5}`}>
                        <label>Goals</label>
                        <select 
                                name='goals'
                                value={formData.goals}
                                onChange={onValueChange}
                                className={''}>
                                    { goals ? 
                                    goals.map((goal) =>
                                        <option key={goal.id} value={`${goal.id}`}>{goal.name}</option>)
                                        : <option>No Goals yet</option>}
                            </select>
                    </div>
                    <button  className={`${styles.form_field} ${styles.form_field_6}`}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
    }

export default CreateMacroCycle
