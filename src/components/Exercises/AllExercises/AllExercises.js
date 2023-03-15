import styles from './AllExercises.module.css'
import React, { useEffect, useState } from 'react'
import { getAllExercises } from '../../../api/exercises'
import { Link } from 'react-router-dom'
import ExerciseCard from './ExerciseCard/ExerciseCard'

function AllExercises() {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getAllExercises().then(
            (res) => {
                console.log('res',res)
                setExercises(res)
                console.log('exercises', exercises)
            }
        ).catch(
           (res) => console.log('this is the error in component',res)
        )
    }, [])
    

    return (
        <section className={styles.exercises}>
            <div className={styles.sider_1}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to={'/create-exercise'}>Create Exercise</Link></li>
                    <li><Link to={'/'}></Link>Create Activity</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Activities</li>
                    <li><Link to='/'>Profile</Link></li>
                </ul>
            </div>
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
                           <ExerciseCard exercise={exercise} key={exercise.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllExercises
