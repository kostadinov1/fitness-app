import React from 'react'
import CardReel from '../Cards/CardReel/CardReel'
import ListCard from '../Cards/ListCard/ListCard'
import styles from './Dashboard.module.css'


function Dashboard() {
  return (
    <section className={styles.dashboard}>
        <div className={styles.grid}>
            <div className={`${styles.grid_card} ${styles.grid_card_1}`}>
                <img src='/images/defaults/default-user.png' alt='' />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_2}`}>
                <h3>TOTALS</h3>
                <ListCard />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_3}`}>
                <h3>RECORDS</h3>
                <ListCard />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_4}`}>
                <h3>CHARTS</h3>
                <img src='/images/backgrounds/background-01.jpg' alt='' />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_5}`}>
                <h3>Jack Username</h3>
                <ul>
                    <li>Age: 36</li>
                    <li>Location: London, UK</li>
                    <li>Prime Sport: Resistance Training</li>
                </ul>
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_6}`}>
                <h3>Activities</h3>
                    <CardReel />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_7}`}>
                <h3>Exercises</h3>
                    <CardReel />
            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_8}`}>
                <h3>Exercises STATS</h3>
                <ListCard />

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_9}`}>
                <h3>Blocks STATS</h3>
                <ListCard />

            </div>
            <div className={`${styles.grid_card} ${styles.grid_card_10}`}>
                <h3>BLOCKS</h3>
                    <CardReel />
            </div>
        </div>
    </section>
  )
}

export default Dashboard
