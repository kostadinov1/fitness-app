import styles from './AllExercises.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { deleteExercise, getAllExercises } from '../../../api/exercises'
import { Link, useNavigate } from 'react-router-dom'
import ExerciseCard from './ExerciseCard/ExerciseCard'
import { UserContext } from '../../../contexts/UserContext'
import ListCard from '../../Cards/ListCard/ListCard'
import DeleteModal from './DeleteModal/DeleteModal'
import UsefulLinksCard from '../../Cards/UsefulLinksCard/UsefulLinksCard'

function AllExercises() {
    const {user} = useContext(UserContext)
    const [exercises, setExercises] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [currentExerciseID, setCurrentExerciseID] = useState(null)
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getAllExercises(user).then((res) => { setExercises(res)}
        ).catch()
    }, [user,])

    const onDelete = (exerciseID) => {
        setShowDeleteModal(true)
        setCurrentExerciseID(exerciseID)
        setTrigger(true)
    }
    const onDeleteCancel = () => {
        setShowDeleteModal(false)
    }
    const onDeleteConfirm = (currentExerciseID, setTrigger) => {
                deleteExercise(user, currentExerciseID)
            .then((res) => {
                setShowDeleteModal(false)
                setTrigger(true)
                    // navigate('/all-exercises')
                            })
            .catch()
    }
    
    return (
        <section className={styles.exercises}>
            {showDeleteModal ? <DeleteModal 
                                    onDeleteCancel={onDeleteCancel} 
                                    onDeleteConfirm={onDeleteConfirm}
                                    currentExerciseID={currentExerciseID}
                                    setTrigger={setTrigger}
                                    /> 
                            : null}
            <div className={`${styles.sider_1}`}>
            <ListCard></ListCard>

            </div>
            <div className={styles.sider_2}>
                <UsefulLinksCard></UsefulLinksCard>
            </div>
            <div className={styles.exy_box}>
                {exercises ? exercises.map((exercise) => 
                           <ExerciseCard exercise={exercise} onDelete={onDelete} setTrigger={setTrigger} key={exercise.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllExercises
