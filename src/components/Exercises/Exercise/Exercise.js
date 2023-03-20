import styles from './Exercise.module.css'

import React from 'react'

function Exercise() {
  return (
    <section className={styles.exercise}>
        <div className={styles.sider_1}></div>    
        <div className={styles.sider_2}></div>    
        <div className={styles.view}></div>    
    </section>
  )
}

export default Exercise
