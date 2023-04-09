import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  
  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles.title}`}>Hello and Welcome to Our Website</div>
        <div className={`${styles.subtitle}`}>Here you can Create and Organize Your Activities for Free!</div>
        <div className={`${styles.pdiv}`}>
          <hr/>
          What can you find here?
          <hr/>
          <p>
                This website is created in 2023 to help user achieve their goals.
                Whith custom built exercises, activities and periodization cycles
                our website gives You the ability to built and organize Your own training
                protocols with ease.
            </p>
            <hr/>
            <p>
                This web application give You the ability to create Your custom
                Exercises which You can group in Activities, which can be added to Your 
                Calendar. All Activities can be organized periodicaly in cycles which can
                have Goals and Defenders.
                If You have the knowledge how to organize your workouts in an optimal way, 
                You can build almost any program your mind can think of!
                Once You built and organize your workouts(activites), You can enjoy just
                tweaking and fine tuning Your programs to fit Your needs for the future needs.
            </p>
        {/* <p>"The manipulation of training variable to enhance progress, reduce injury risk , and time peak performances."</p> */}
        </div>
    </div>
  )
}

export default Banner
