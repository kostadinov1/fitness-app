import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllActivities } from '../../../api/activities';
import ActivityCard from '../Custom/ActivityCard';
import styles from './AllActivities.module.css';

function AllActivities() {

    const [activites, setActivities] = useState([])

    useEffect(() => {
        getAllActivities().then(
            (res) => {
                console.log(res)
                setActivities(res)
                console.log(activites)
            }
        ).catch(
           (res) => console.log('this is the error in component',res)
        )
    }, [])
    
    return (
        <section className={styles.activities}>
            <div className={styles.sider_1}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to={'/'}></Link>Create Activity</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Profile</li>
                </ul>
            </div>
            <div className={styles.sider_2}>
            <h4>More Links</h4>

                <ul>
                    <li><Link to={'/'}></Link>Create Activity</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Profile</li>
                </ul>
                <ul>
                    <li><Link to={'/'}></Link>Create Activity</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Profile</li>
                </ul>
                <ul>
                    <li><Link to={'/'}></Link>Create Activity</li>
                    <li><Link to={'/'}></Link>Exercises</li>
                    <li><Link to={'/'}></Link>Profile</li>
                </ul>
            </div>
            <div className={styles.acty_box}>
            {/* <h1 className='section_title'>Activities</h1> */}
                {activites ? activites.map((activity) => 
                           <ActivityCard activity={activity} />
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllActivities
