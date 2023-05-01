import styles from './Home.module.css'

import React from 'react'
import Hero from './Hero/Hero'
import UsefulLinks from './UsefulLinks/UsefulLinks'
import YoutubeChannels from './YoutubeChannels/YoutubeChannels'
import Banner from './Banner/Banner'
import PeriodizationSteps from './PeriodizationSteps/PeriodizaitonSteps'
import GoalsSteps from './GoalsSteps/GoalsSteps'
import HeroCarousel from './Carousel/HeroCarousel'
import Contacts from '../Contacts/Contacts'

function Home() {
  return (
    <section className={styles.home}>
        
        <HeroCarousel />
        <PeriodizationSteps />
        <GoalsSteps />
        {/* <Hero></Hero> */}
        {/* <Banner></Banner> */}
        {/* <YoutubeChannels></YoutubeChannels> */}
        <Contacts></Contacts>
        <UsefulLinks></UsefulLinks>
    </section>
  )
}

export default Home
