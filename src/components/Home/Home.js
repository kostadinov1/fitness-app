import styles from './Home.module.css'

import React from 'react'
import Hero from './Hero/Hero'
import UsefulLinks from './UsefulLinks/UsefulLinks'
import YoutubeChannels from './YoutubeChannels/YoutubeChannels'
import Banner from './Banner/Banner'
import PeriodizationSteps from './PeriodizationSteps/PeriodizaitonSteps'
import GoalsSteps from './GoalsSteps/GoalsSteps'

function Home() {
  return (
    <section className={styles.home}>
        <PeriodizationSteps />
        <GoalsSteps />
        {/* <Banner></Banner> */}
        {/* <Hero></Hero> */}
        {/* <UsefulLinks></UsefulLinks> */}
        {/* <YoutubeChannels></YoutubeChannels> */}
    </section>
  )
}

export default Home
