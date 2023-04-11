import styles from './EditProfileModal.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { editProfile, getProfile } from '../../../api/profile'
import { DatePicker } from 'antd'


function EditProfileModal({setToggleEdit}) {
    const {user} = useContext(UserContext)
    const [profile, setProfile] = useState({})
    const [formData, setFormData] = useState({
        first_name: null,
        last_name: null,
        dob: null,
        gender: null,
        phone: null,
        image_local: undefined,
        user: user.user_id

    })

    useEffect(() => {
        getProfile(user)
            .then((res) => { setProfile(res) })
            .catch((res) => {})
    }, [user])

    const onSubmitHandler = (e) => {
        e.preventDefault()

        editProfile(user, formData)
            .then((res) => {
                setProfile((profile) => ({...profile, formData}))
             })
            .catch((res) => { })
        setToggleEdit(false)
    }
    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))    
    }

    const onChange = (date, dateString) => {
        // console.log(dateString, 'results in onchange profile edit modal');
        setFormData((state) => ({...state, dob: dateString}))    
        
    }

  return (
    <section className={`${styles.edit_profile}`}>
            Edit Profile
        <form onSubmit={onSubmitHandler} className={`${styles.form}`}>
            <div className={`${styles.field} ${styles.field_1}`}>
            <label htmlFor='first_name'>First Name</label>
            <input
                type={'text'}
                id={'first_name'}
                name={'first_name'}
                value={formData.first_name}
                onChange={onValueChange}
                placeholder={profile.first_name}
                ></input>
            </div>
            <div className={`${styles.field} ${styles.field_2}`}>
            <label htmlFor='last_name'>Last Name</label>
            <input
                type={'text'}
                id={'last_name'}
                name={'last_name'}
                value={formData.last_name}
                placeholder={profile.last_name}
                onChange={onValueChange}
                ></input>
            </div>
            <div className={`${styles.field} ${styles.field_3}`}>
            <label htmlFor='dob'>Date of Birth</label>
            <DatePicker onChange={onChange} />

            {/* <input
                type={'text'}
                id={'dob'}
                name={'dob'}
                value={formData.dob}
                onChange={onValueChange}
                placeholder={`YYYY-MM-DD`}
                ></input> */}
            </div>
            <div className={`${styles.field} ${styles.field_4}`}>
                <label htmlFor='gender'>Gender</label>
                <select 
                    value={formData.gender}
                    onChange={onValueChange}
                    name='gender'
                    className={styles.form_input}>
                        <option value={`Female`}>Female</option>
                        <option value={`Male`}>Male</option>
                        <option value={`LGBT+`}>LGBT+</option>
                </select>
            </div>
            <div className={`${styles.field} ${styles.field_5}`}>
            <label htmlFor='phone'>Phone</label>
            <input
                type={'text'}
                id={'phone'}
                name={'phone'}
                value={formData.phone}
                onChange={onValueChange}
                placeholder={profile.phone}
                ></input>
            </div>

            {/* TODO upload image with separate request */}
            <div className={`${styles.field} ${styles.field_6}`}>
            <label htmlFor='image_local'>Image</label>
            <input
                type={'file'}
                id={'image_local'}
                name={'image_local'}
                value={formData.image_local}
                onChange={onValueChange}
                ></input>
            </div>
            <div className={`${styles.field} ${styles.field_7}`}>

            <button>Edit</button>
            <button>Cancel</button>
            </div>

        </form>
    </section>
  )
}

export default EditProfileModal
