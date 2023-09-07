
import styles from './CreateMesoCycle.module.css'
import React, { useContext, useState, useEffect } from 'react'
import ListCard from '../../../Cards/ListCard/ListCard'
import { UserContext } from '../../../../contexts/UserContext'
import { DatePicker, Select } from 'antd'
import { getAllGoals } from '../../../../api/goals'
import { useNavigate } from 'react-router-dom'
import { createMesoCycle } from '../../../../api/cycles/mesoCycle'
import { getAllMacroCycles } from '../../../../api/cycles/macroCycle'

function CreateMesoCycle() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const [goals, setGoals] = useState([])
    const [macroCycles, setMacroCycles] = useState([])
    const [formData, setFormData] = useState({
        name: undefined,
        start_date: undefined,
        end_date: undefined,
        description: undefined, 
        goals: undefined,
        macro_cycle : undefined,
        user: user.user_id
    })

    useEffect(() => {
        getAllGoals(user)
            .then((res) => {setGoals(res)})
            .catch((res) => {})
        getAllMacroCycles(user)
            .then((res) => {setMacroCycles(res)})
            .catch((res) => {})
    }, [user])

    const onValueChange = (e, data) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }
    const onGoalSelectChange = (value, label) => {
        setFormData((state) => ({...state, goals: value}))
    }
    const onMacroSelectChange = (value, label) => {
        setFormData((state) => ({...state, macro_cycle: value}))
    }
	const onStartDateChangeHandler = (date, dateString) => {
        setFormData((state) => ({...state, start_date: dateString}))
	}
    const onEndDateChangeHandler = (date, dateString) => {
        setFormData((state) => ({...state, end_date: dateString}))
	}
    const onFormSubmitHandler = (e) => {
        e.preventDefault()

        createMesoCycle(user, formData)
            .then((res) => {
                navigate('/periodization')
            })
            .catch((res) => {})
    }


    return (
        <div className={`${styles.create_meso} layout` }>
            <div className={`sidebar_box`}>
                <ListCard></ListCard>
            </div>
            <div className={`content_box`}>
            <h1>Create MESO Cycle</h1>
                <form 
                    onSubmit={onFormSubmitHandler}
                    className={`${styles.form}`}>
                    <div className={`${styles.form_field} ${styles.form_field_1}`}>
                        <label>Name</label>
                        <input 
                            name='name'
                            value={formData.name}
                            onChange={onValueChange}
                            placeholder={'Enter Meso Cycle Name'}
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
                        <label>Goal</label>
                            <Select
                                multiple={true}
                                defaultValue=""
                                style={{}}
                                value={formData.goals}
                                onChange={onGoalSelectChange}
                                options={goals.map((goal) => ({value: goal.id, label: goal.name})) 
                            } />                        
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_6}`}>
                        <label>Macro Cycle</label>
                            <Select
                                defaultValue=""
                                style={{}}
                                value={formData.macro_cycle}
                                onChange={onMacroSelectChange}
                                options={macroCycles.map((macro) => ({value: macro.id, label: macro.name})) 
                            } />                        
                    </div>
                    <button  className={`${styles.form_field} ${styles.form_field_7}`}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
    }

export default CreateMesoCycle
