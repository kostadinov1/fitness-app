import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteActivity, getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ListCard from '../../Cards/ListCard/ListCard';
import ActivityCard from './ActivityCard/ActivityCard';
import styles from './AllActivities.module.css';

function AllActivities() {
    const {user} = useContext(UserContext)
    const [activites, setActivities] = useState([])
    const navigate = useNavigate()
    const [modified, setModified] = useState(false)

    useEffect(() => {
        getAllActivities(user)
            .then((res) => { setActivities(res)})
            .catch((res) => {})
    }, [user, setActivities])

    const onDelete = (activityID) => {
        deleteActivity(user, activityID)
            .then((res) => {
                // navigate('/all-activities')
            })
            .catch((res) => {})
        setModified(true)
    }   
    
    return (
        <section className={styles.activities}>
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
