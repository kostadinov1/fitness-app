import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllActivities } from '../../../api/activities';
import { UserContext } from '../../../contexts/UserContext';
import ActivityCard from './ActivityCard/ActivityCard';
import styles from './AllActivities.module.css';

function AllActivities() {
    const {user} = useContext(UserContext)
    const [activites, setActivities] = useState([])

    useEffect(() => {
        getAllActivities(user)
            .then((res) => { setActivities(res) })
            .catch((res) => console.log('this is the error in component',res))
    }, [])
    
    return (
        <section className={styles.activities}>
            <div className={styles.sider_1}>
                <h4>Quick</h4>
                <ul>
                    <li><Link to={'/create-activity'}>Create Activity</Link></li>
                    <li><Link to={'/all-exercises'}>Exercises</Link></li>
                    <li><Link to={'/'}>Profile</Link></li>
                </ul>
            </div>
            <div className={styles.sider_2}>
                <ul>
                    <li><Link to={'/'}>Create Activity</Link></li>
                    <li><Link to={'/'}>Exercises</Link></li>
                </ul>
            </div>
            <div className={styles.acty_box}>
            {/* <h1 className='section_title'>Activities</h1> */}
                {activites ? activites.map((activity) => 
                           <ActivityCard activity={activity} key={activity.id}/>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllActivities
