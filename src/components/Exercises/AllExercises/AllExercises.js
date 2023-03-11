import styles from './AllExercises.module.css'
import React, { useEffect, useState } from 'react'
import { getAllExercises } from '../../../api/exercises'

function AllExercises() {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getAllExercises().then(
            (res) => {
                console.log(res)
                setExercises(res)
                console.log(exercises)
            }
        ).catch(
           (res) => console.log('this is the error in component',res)
        )
    }, [exercises, setExercises])
    

    return (
        <section className={styles.exercises}>
            <h1>Exercises</h1>
            <div className={styles.exer_box}>

                {exercises ? exercises.map((exercise) => 
                           <h4>Exercise: {exercise.name}</h4>
                        ): <h1>No Exersises Yet!</h1>
                }
                <h1>No Exersises bruh!</h1>

            </div>
        </section>
    )
}

export default AllExercises