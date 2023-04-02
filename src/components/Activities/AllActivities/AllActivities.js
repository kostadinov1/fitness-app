import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteActivity, getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ListCard from '../../Cards/ListCard/ListCard';
import ActivityCard from './ActivityCard/ActivityCard';
import styles from './AllActivities.module.css';
import DeleteModal from './DeleteModal/DeleteModal';

function AllActivities() {
    const {user} = useContext(UserContext)
    const [activites, setActivities] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [currentActivityID, setCurrentActivityID] = useState(null)
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()
    const [modified, setModified] = useState(false)

    useEffect(() => {
        getAllActivities(user)
            .then((res) => { setActivities(res)})
            .catch((res) => {})
    }, [user, setActivities])

    const onDelete = (activityID) => {
        setShowDeleteModal(true)
        setCurrentActivityID(activityID)
    }
    const onDeleteCancel = () => {
        setShowDeleteModal(false)
    }
    const onDeleteConfirm = (currentActivityID, setTrigger) => {
                deleteActivity(user, currentActivityID)
            .then((res) => {
                setShowDeleteModal(false)
                setTrigger(true)
                    // navigate('/all-exercises')
                            })
            .catch()
    }
    return (
        <section className={styles.activities}>
                        {showDeleteModal ? <DeleteModal 
                                    onDeleteCancel={onDeleteCancel} 
                                    onDeleteConfirm={onDeleteConfirm}
                                    currentActivityID={currentActivityID}
                                    setTrigger={setTrigger}
                                    /> 
                            : null}
            <ListCard></ListCard>
            <div className={styles.sider_2}>
                <ul>
                    <li><Link to={'/'}>Create Activity</Link></li>
                    <li><Link to={'/'}>Exercises</Link></li>
                </ul>
            </div>
            <div className={styles.acty_box}>
            {/* <h1 className='section_title'>Activities</h1> */}
                {activites ? activites.map((activity) => 
                                                    <ActivityCard 
                                                        activity={activity}
                                                        onDelete={onDelete}
                                                        modified={modified} 
                                                        setModified={setModified} 
                                                        key={activity.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllActivities
