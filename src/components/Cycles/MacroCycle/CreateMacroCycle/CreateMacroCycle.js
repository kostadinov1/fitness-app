
import styles from './CreateMacroCycle.module.css'
import React, { useContext, useState } from 'react'
import ListCard from '../../../Cards/ListCard/ListCard'
import { UserContext } from '../../../../contexts/UserContext'

function CreateMacroCycle() {
    const {user} = useContext(UserContext)
    // TODO get all goals to a create choice field
    const [goals, setGoals] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        start_date: '',
        end_date: '',
        description: '', 
        goals: '',
        user: user.id
    })

    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }
	const onDateChangeHandler = (date, dateString) => {
        console.log(date, dateString, 'ondatechangehandler')
        setFormData((state) => ({...state, start_time: dateString}))
        // setFormData((state) => ({...state, end_time: dateString[1]}))
	}



    return (
        <div className={`${styles.create_macro} sidebar_layout` }>
            <div className={`sidebar_box`}>
                <ListCard></ListCard>
            </div>
            <div className={`content_box`}>
                <form className={`${styles.form}`}>
                    <div className={`${styles.form_field} ${styles.form_field_}`}>
                        <label>Name</label>
                        <input 
                            name=''
                            value={formData.name}
                            onChange={onValueChange}
                        />
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_}`}>
                        <label>Start Date</label>
                        <input></input>
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_}`}>
                        <label>End Date</label>
                        <input></input>
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_}`}>
                        <label>Description</label>
                        <input></input>
                    </div>
                    <div className={`${styles.form_field} ${styles.form_field_}`}>
                        <label>Goals</label>
                        <input></input>
                    </div>

                </form>
            </div>
        </div>
    )
    }

export default CreateMacroCycle
