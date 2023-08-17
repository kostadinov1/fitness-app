import React, { useContext, useEffect, useState } from 'react';
import { deleteActivity, getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ActivityCard from './ActivityCard/ActivityCard';
import styles from './AllActivities.module.css';
import DeleteModal from './DeleteModal/DeleteModal';

function AllActivities() {
    const {user} = useContext(UserContext)
    const [activites, setActivities] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [currentActivityID, setCurrentActivityID] = useState(null)

    useEffect(() => {
        getAllActivities(user)
            .then((res) => { setActivities(res)
                console.log(res)})
            .catch((res) => {})
    }, [user, setActivities])

    const onDelete = (activityID) => {
        setShowDeleteModal(true)
        setCurrentActivityID(activityID)
    }
    const onDeleteCancel = () => {
        setShowDeleteModal(false)
    }
    const onDeleteConfirm = (currentActivityID) => {
            deleteActivity(user, currentActivityID)
                .then((res) => {
                    setActivities((state) => state.filter((ex) => ex.id !== currentActivityID) )
                    setShowDeleteModal(false)})
                .catch()
    }
    return (
        <div className={styles.activities}>
            {activites ? activites.map((activity) => <ActivityCard
                                                            activity={activity}
                                                            onDelete={onDelete}
                                                            />) : null}
        </div>
    )
}

export default AllActivities
