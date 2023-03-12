import styles from './Hero.module.css'

import React from 'react'

function Hero() {
  return (
    <section className={styles.hero}>
        <div className={`${styles.card} ${styles.card_1}`}>
            <img src='/images/backgrounds/background-01.jpg' alt='' className={styles.img}></img>
        </div>
        <div className={`${styles.card} ${styles.card_2}`}>
            <img src='/images/backgrounds/background-02.jpg' alt='' className={styles.img}></img>
        </div>
        <div className={`${styles.card} ${styles.card_3}`}>
            <img src='/images/backgrounds/background-05.jpg' alt='' className={styles.img}></img>
        </div>
        <div className={`${styles.card} ${styles.card_4}`}>
            <img src='/images/backgrounds/background-04.jpg' alt='' className={styles.img}></img>
        </div>
        <div className={`${styles.card} ${styles.card_5}`}>
            <img src='/images/backgrounds/background-03.jpg' alt='' className={styles.img}></img>
        </div>
    </section >
  )
}

export default Hero
