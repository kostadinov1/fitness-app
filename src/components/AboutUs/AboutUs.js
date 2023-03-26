import styles from './AboutUs.module.css'
import '../../App.css'
import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <section className={styles.about_us}>
        <div className={`${styles.title_box}`}>
        <div className={`${styles.title}`}>
            Hello and Welcome to Our Website.
        </div>
        <div className={`${styles.subtitle}`}>
            We are here to help You go farther.
        </div>
        <div className={`${styles.description}`}>
            <p>
                This website is create in 2023 to help user achieve their goals.
                Whith custom built exercises, activities and periodization cycles
                our website gives You the ability to built and organize Your training
                programs with ease.
            </p>
            <p>
                This web application give You the ability to create Your custom
                Exercises which You can group in Activities, which can be added to Your 
                Calendar. All Activities can be organized periodicaly in cycles which can
                have Goals and Defenders.
                This sounds quite complicated initially, but for people who need this
                certain features, this app can be really useful.
                Once You built and organize your workouts(activites), You can enjoy just
                tweaking and fine tuning Your programs to fit Your needs.
            </p>

            <p>
                In the near future we consider adding functionality for tracking 
                different aspects of Your trainng process and You will be able 
                to enjoy full functionality. For now You can start
                enjoing our services clicking on the link below.
            </p>
        </div> 
        <Link className={`${styles.title_link}`} to={'/register'}>
        Create Your Account Today
        </Link>     
        </div>
    </section>
  )
}

export default AboutUs
