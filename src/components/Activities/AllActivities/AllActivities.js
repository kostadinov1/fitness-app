import React, { useContext, useEffect, useState } from 'react';
import { deleteActivity, getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ActivityCard from './ActivityCard/ActivityCard';
import styles from './AllActivities.module.css';
import DeleteModal from './DeleteModal/DeleteModal';
import { Link } from 'react-router-dom';

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
   <div className={`${styles.sidebar}`}>
                <h3 className={`${styles.sidebar_title}`}>Quick Links</h3>
                <ul className={`${styles.sidebar_ul}`}>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={`/create-activity`} className={`${styles.sidebar_link}`}>Create Activity</Link>
                    </li>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={``} className={`${styles.sidebar_link}`}></Link>
                    </li>
                    <li className={`${styles.sidebar_li}`}>
                        <Link to={``} className={`${styles.sidebar_link}`}></Link>
                    </li>
                </ul>
            </div>
            {showDeleteModal ? <DeleteModal  
                                    currentActivityID={currentActivityID}
                                    onDeleteCancel={onDeleteCancel}
                                    onDeleteConfirm={onDeleteConfirm}
                                    /> : null}
            <div className={`${styles.content}`}>

            {/* TODO Add Toolbar to filter Activities by given param */}
            
                {activites ? activites.map((activity) => <ActivityCard
                                                                key={activity.id}
                                                                activity={activity}
                                                                onDelete={onDelete}
                                                                />) : null}
            </div>
        </div>
    )
}

export default AllActivities
