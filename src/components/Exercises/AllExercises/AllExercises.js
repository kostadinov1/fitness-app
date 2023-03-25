import styles from './AllExercises.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { deleteExercise, getAllExercises } from '../../../api/exercises'
import { Link, useNavigate } from 'react-router-dom'
import ExerciseCard from './ExerciseCard/ExerciseCard'
import { UserContext } from '../../../contexts/UserContext'
import ListCard from '../../Cards/ListCard/ListCard'

function AllExercises() {
    const {user} = useContext(UserContext)
    const [exercises, setExercises] = useState([])
    const [modified, setModified] =  useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getAllExercises(user).then((res) => { setExercises(res)}
        ).catch()
    }, [user, ])

    const onDelete = (exerciseID) => {
        deleteExercise(user, exerciseID)
            .then((res) => {
                    setModified(true)
                    navigate('/all-exercises')
                            })
            .catch()
    }   

    
    return (
        <section className={styles.exercises}>
            <ListCard></ListCard>
            <div className={styles.sider_2}>
            <h4>More Links</h4>
                <ul>
                    <li><Link to={'/'}></Link>Create Exercise</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Profile</li>
                </ul>
            </div>
            <div className={styles.exy_box}>
            {/* <h1 className='section_title'>Activities</h1> */}
                {exercises ? exercises.map((exercise) => 
                           <ExerciseCard exercise={exercise} onDelete={onDelete} key={exercise.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllExercises
