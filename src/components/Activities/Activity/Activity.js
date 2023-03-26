import styles from './Activity.module.css'
import '../../../App.css'

import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { deleteActivity, getActivity } from '../../../api/activities'
import ListCard from '../../Cards/ListCard/ListCard'
import { PlusCircleOutlined } from '@ant-design/icons'

function Activity() {

  const {id} = useParams()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [ activity, setActivity ] = useState({})
  const [activityExercices, setActivityExercises] = useState([])

  
  useEffect(() => {
      getActivity(id)
          .then((res) => {
              setActivity(res)
              setActivityExercises(res.exercises)
              console.log('res in useEffect', res)
          })
          .catch((res) => {

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
    <ListCard></ListCard>
    </div>
      <div className={styles.sider_2}>
      <ListCard></ListCard>

      </div>    
      <div className={styles.view}>
          <div className={styles.card}>
              <div className={styles.card_info}>
                    <span className={`${styles.card_cell_1} ${'title_outlined'} `}>{activity.name}</span>
                    <span className={`${styles.card_cell_2} ${styles.card_cell}`}>Info: {activity.description}</span>
                    <span className={`${styles.card_cell_3} ${styles.card_cell}`}>Duration: {activity.duration}</span>
                    <span className={`${styles.card_cell_4} ${styles.card_cell}`}>Distance: {activity.distance}</span>
                    <span className={`${styles.card_cell_5} ${styles.card_cell}`}>Pace: {activity.pace}</span>
                    <span className={`${styles.card_cell_6} ${styles.card_cell}`}>Speed: {activity.speed}</span>
                    <span className={`${styles.card_cell_7} ${styles.card_cell}`}>Heaert Rate: {activity.heart_rate}</span>
                    <span className={`${styles.card_cell_8} ${styles.card_cell}`}>RPE: {activity.rpe}</span>
                    <span className={`${styles.card_cell_10} ${styles.card_cell}`}>Type: {activity.type}</span>
                    <span className={`${styles.card_cell_9} ${styles.card_cell}`}>Goal: {activity.goal}</span>
                    <Link className={`${styles.card_cell_11} ${styles.card_cell} ${styles.card_cell_link}`} 
                        to={`/edit-activity/${activity.id}/`}>
                        Edit
                    </Link>
                    <Link className={`${styles.card_cell_12} ${styles.card_cell} ${styles.card_cell_link}`}  
                        onClick={onDelete}>
                        Delete
                    </Link>
              </div>
          </div>
          <div className={styles.details}>
              <hr></hr>
              <h4  className={`${'title_outlined'}`}>Exercises</h4>
              <Link className={`${styles.add_exercise_icon}`} to={'/create-exercise'}><PlusCircleOutlined></PlusCircleOutlined> Add Exercise</Link>
              <hr></hr>

                {activityExercices.length !== 0 ?
                 activityExercices.map((ex) =>                           
                                    <Link key={ex.id} className={`${styles.exercise_link} ${'title_outlined'}`} to={`/exercise/${ex.id}/`}>
                                    {ex.name}
                                    </Link>)
                            :<>
                             <h5>NO EXERCISES</h5>
                            </>

                }

          </div>
      </div>    
  </section>
)
}

export default Activity
