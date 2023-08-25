import styles from './AllExercises.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { deleteExercise, getAllExercises } from '../../../../api/exercises'
import ExerciseCard from './../../../Cards/ExerciseCard/ExerciseCard'
import { UserContext } from '../../../../contexts/UserContext'
import ListCard from '../../../Cards/ListCard/ListCard'
import DeleteModal from '../DeleteModal/DeleteModal'
import UsefulLinksCard from '../../../Cards/UsefulLinksCard/UsefulLinksCard'
import { Link } from 'react-router-dom'

function AllExercises() {
    const {user} = useContext(UserContext)
    const [exercises, setExercises] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [currentExerciseID, setCurrentExerciseID] = useState(null)

    useEffect(() => {
        getAllExercises(user).then((res) => { setExercises(res)}
        ).catch()
    }, [user,])

    const onDelete = (exerciseID) => {
        setShowDeleteModal(true)
        setCurrentExerciseID(exerciseID)
        
    }
    const onDeleteCancel = () => {
        setShowDeleteModal(false)
    }
    const onDeleteConfirm = (currentExerciseID) => {
        deleteExercise(user, currentExerciseID)
        .then((res) => {
            setShowDeleteModal(false)
            setExercises((state) => state.filter((ex) => ex.id !== currentExerciseID) )
                            })
            .catch()
    }
    console.log(exercises, 'exercises');
    return (
        <div className={styles.exercises}>
            <div className={`${styles.sidebar}`}>
                <h3 className={`${styles.sidebar_title}`}>Quick Links</h3>
                <ul className={`${styles.sidebar_ul}`}>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={`/create-exercise`} className={`${styles.sidebar_link}`}>Create Exercise</Link>
                    </li>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={``} className={`${styles.sidebar_link}`}></Link>
                    </li>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={``} className={`${styles.sidebar_link}`}></Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.content}`}>
                {exercises ? exercises.map((exercise) => <ExerciseCard 
                                                            key={exercise.id}
                                                            exercise={exercise}
                                                            onDelete={onDelete}
                                                            />) : null}

            </div>

        </div>
    )
}

export default AllExercises
