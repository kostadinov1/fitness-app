import styles from './Activity.module.css'


import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { deleteActivity, getActivity } from '../../../api/activities'

function Activity() {

  const {id} = useParams()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [ activity, setActivity ] = useState({})
  
  useEffect(() => {
      getActivity(id)
          .then((res) => {
              setActivity(res)
              console.log('res in useEffect', res)
          })
          .catch((res) => {
              console.log('res in useEffect', res)
          })
  }, [])

  const onDelete = () => {
      deleteActivity(activity.id, user.id)
          .then((res) => {console.log(res, 'res in exercise rac')
              navigate('/all-activities')
                          })
          .catch((res) => console.log(res, 'res in exercise rac'))
  }   


return (
  <section className={styles.exercise}>
      <div className={styles.sider_1}>
      <h4>Quick</h4>
              <ul>
                  <li><Link to={'/create-activity'}>Create Activity</Link></li>
                  <li><Link to={'/all-exercises'}>Exercises</Link></li>
                  <li><Link to={'/'}>Profile</Link></li>
              </ul>
      </div>    
      <div className={styles.sider_2}>
      <h4>Quick</h4>
              <ul>
                  <li><Link to={'/create-activity'}>Create Activity</Link></li>
                  <li><Link to={'/all-exercises'}>Exercises</Link></li>
                  <li><Link to={'/'}>Profile</Link></li>
              </ul>
      </div>    
      <div className={styles.view}>
          <div className={styles.card}>
              <div className={styles.card_info}>
                  <h3 className={styles.card_cell_1}><Link to={`/activity/${activity.id}`}>{activity.name}</Link></h3>
                  <span className={`${styles.card_cell_2} ${styles.card_cell}`}>Info: {activity.description}</span>
                  <span className={`${styles.card_cell_3} ${styles.card_cell}`}>Duration: {activity.duration}</span>
                  <span className={`${styles.card_cell_4} ${styles.card_cell}`}>Distance: {activity.distance}</span>
                  <span className={`${styles.card_cell_5} ${styles.card_cell}`}>Pace: {activity.pace}</span>
                  {/* TODO */}
                  {/* To add them to card */}
                  {/* <span className={`${styles.card_cell_5} ${styles.card_cell}`}>Speed: {activity.speed}</span> */}
                  {/* <span className={`${styles.card_cell_5} ${styles.card_cell}`}>Heaert Rate: {activity.heart_rate}</span> */}
                  {/* <span className={`${styles.card_cell_5} ${styles.card_cell}`}>RPE: {activity.rpe}</span> */}
                  <span className={`${styles.card_cell_6} ${styles.card_cell}`}>Cues: {activity.cues}</span>
                  <span className={`${styles.card_cell_7} ${styles.card_cell}`}>Type: {activity.type}</span>
                  <Link className={`${styles.card_cell_8} ${styles.card_cell} ${styles.card_cell_link}`} 
                      to={`/edit-activity/${activity.id}/`}>
                      Edit
                      </Link>
                  <Link className={`${styles.card_cell_9} ${styles.card_cell} ${styles.card_cell_link}`}  
                      onClick={onDelete}>
                      Delete
                      </Link>
              </div>
          </div>
          <div className={styles.details}>
              <hr></hr>
              <h4>Description: </h4>
              <p>{activity.description}</p>
              <hr></hr>
              <h4>Goals: </h4>
              <p>{activity.cues}</p>
              <hr></hr>
          </div>
      </div>    
  </section>
)
}

export default Activity
