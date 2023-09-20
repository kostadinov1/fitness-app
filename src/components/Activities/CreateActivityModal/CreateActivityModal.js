
import styles from './CreateActivityModal.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { listActivityTypes } from '../../../api/activityTypes'
import { createActivity } from '../../../api/activities'
import { UserContext } from '../../../contexts/UserContext'

const CreateActivityModal = ({setShowCreateActivityModal, selectedMicro, setSelectedMicro, selectedDay}) => {
    const {user} = useContext(UserContext)
    const [activityTypes, setActivityTypes] = useState([])

    function incrementDate(djangoDate, increment) {
        const djToJsDate = new Date(djangoDate)
        const jsDate = new Date()
        jsDate.setTime(djToJsDate.getTime() + increment * 86400000);
        let day = jsDate.getDate()
        let month = jsDate.getMonth() + 1;
        let year = jsDate.getFullYear();
        const resultDate = `${year}-${month}-${day}`
        return resultDate
    }           
    // THIS IS TRUE ONLY IF THE RELATED MESOCYCLE STARTS MONDAY !!!!!!!!!!
    const activityStartDate = incrementDate(selectedMicro.start_date, selectedDay - 1)  // THE LAST NUMBER HERE - HARD CODED PROBLEM
    const [formData, setFormData] = useState({
            name: '',
            start_time: activityStartDate,
            type: undefined,
            micro_cycle: selectedMicro?.id,
            user: user.user_id
    })
    // console.log(formData,'formData createAcri Modal')

  useEffect(() => {
        listActivityTypes()
            .then((res) => {setActivityTypes(res)})
            .catch((res) => {})
        }, [user])

    function onCreate(e) {
        e.preventDefault()
        createActivity(user, formData)
            .then((res) => {
                setSelectedMicro((state) => ({...state, activities: [...state.activities, res]}) )
                setShowCreateActivityModal(false)

                    
            })
            .catch((res) => {console.log(res, 'res in')})
    }
    
    function onValueChange(e) {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))
    }
    function onNoClick() {
        setShowCreateActivityModal(false)
    }

  return (
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
            <button  className={`${styles.form_num_input} ${styles.form_item_box_3} ${styles.item}`}>
                CREATE
            </button>
            <button  
                onClick={onNoClick}
                className={`${styles.form_num_input} ${styles.form_item_box_4} ${styles.item}`}>
                CANCEL
            </button>

        </form>
    </div>
  )
}

export default CreateActivityModal