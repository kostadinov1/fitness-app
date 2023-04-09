import styles from './EditProfileModal.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { editProfile, getProfile } from '../../../api/profile'


function EditProfileModal({setToggleEdit}) {
    const {user} = useContext(UserContext)
    const [profile, setProfile] = useState({})
    const [formData, setFormData] = useState({
        first_name: null,
        last_name: null,
        dob: null,
        gender: null,
        phone: null,
        image_url: null,
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
            <input
                type={'text'}
                id={'dob'}
                name={'dob'}
                value={formData.dob}
                onChange={onValueChange}
                placeholder={profile.dob}
                ></input>
            </div>
            <div className={`${styles.field} ${styles.field_4}`}>
            <label htmlFor='gender'>Gender</label>
            <input
                type={'text'}
                id={'gender'}
                name={'gender'}
                value={formData.gender}
                onChange={onValueChange}
                placeholder={profile.gender}
                ></input>
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
            <div className={`${styles.field} ${styles.field_6}`}>
            <label htmlFor='image_url'>Image URL</label>
            <input
                type={'url'}
                id={'image_url'}
                name={'image_url'}
                value={formData.image_url}
                onChange={onValueChange}
                placeholder={profile.image_url}
                ></input>
            </div>
            <div className={`${styles.field} ${styles.field_7}`}>
            <label htmlFor='image_local'>Image</label>
            <input
                type={'file'}
                id={'image_local'}
                name={'image_local'}
                value={formData.image_local}
                onChange={onValueChange}
                ></input>
            </div>
            <button>Edit</button>
        </form>
    </section>
  )
}

export default EditProfileModal
