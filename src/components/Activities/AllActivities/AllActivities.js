import React, { useContext, useEffect, useState } from 'react';
import { deleteActivity, getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ListCard from '../../Cards/ListCard/ListCard';
import UsefulLinksCard from '../../Cards/UsefulLinksCard/UsefulLinksCard';
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
        <section className={styles.activities}>
                        {showDeleteModal ? <DeleteModal 
                                    onDeleteCancel={onDeleteCancel} 
                                    onDeleteConfirm={onDeleteConfirm}
                                    currentActivityID={currentActivityID}
                                    /> 
                            : null}
            <div className={styles.sider_1}>

            <ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
            <UsefulLinksCard></UsefulLinksCard>

            </div>
            <div className={styles.acty_box}>
            {/* <h1 className='section_title'>Activities</h1> */}
                {activites ? activites.map((activity) => 
                                                    <ActivityCard 
                                                        activity={activity}
                                                        onDelete={onDelete}
                                                        key={activity.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllActivities
