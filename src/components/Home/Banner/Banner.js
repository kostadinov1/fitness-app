import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
  return (
    <div className={`${styles.banner}`}>
        <h1>Hello and Welcome to Our Website</h1>
        <h3>Here you can Create and Periodize Your WorkOuts for Free!</h3>
        <h4>What is Periodization?</h4>
        <p>"The manipulation of training variable to enhance progress, reduce injury risk , and time peak performances."</p>
    </div>
  )
}

export default Banner
