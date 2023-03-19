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
    console.log('id',id)
      getActivity(id)
          .then((res) => { setActivity(res)})
          .catch((res) => { console.log('___IN___ useEffect:', res)})

      listActivityTypes()
          .then((res) => { setActivityTypes(res)})
          .catch((res) => { console.log('___IN___ useEffect:', res)})
  }, [])

  const onEdit = (e) => {
      e.preventDefault()
      editActivity(Number(id), {...activity, user:user.user_id})
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

              <label>Name</label>
              <input
                  value={activity.name}
                  onChange={onValueChange}
                  name='name' 
                  className={styles.form_input}  
                  placeholder='Choose a good name' />
              <label>Type</label>
              <select 
                  value={activity.type}
                  onChange={onValueChange}
                  name='type'
                  type={''} 
                  className={styles.form_input}>
                      { activityTypes ? 
                      activityTypes.map((ActivityType) =>
                                       <option value={`${ActivityType.name}`}>{ActivityType.name}</option>)
                      : <option>No Types yet</option>
                      }
              </select>
              <label>Description</label>
              <textarea 
                  value={activity.description}
                  onChange={onValueChange}
                  name='description'
                  type={'text'} 
                  className={styles.form_input}  
                  placeholder='Short Description'>

                  </textarea >


          <button >Edit</button>
      </form>

    </div>
  </section>
)
}

export default EditActivity
