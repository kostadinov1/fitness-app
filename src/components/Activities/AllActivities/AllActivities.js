import React, { useEffect, useState } from 'react';
import { getAllActivities } from '../../../api/activities';
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
        <section className={styles.activites}>
            <h1>Activities</h1>
            <div className={styles.acty_box}>
                {activites ? activites.map((activity) => 
                           <h4>Activity: {activity.name}</h4>
                        ): <h1>No activites Yet!</h1>
                }
            </div>
        </section>
    )
}

export default AllActivities
