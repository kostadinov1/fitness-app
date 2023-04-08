import styles from './Home.module.css'

import React from 'react'
import Hero from './Hero/Hero'
import UsefulLinks from './UsefulLinks/UsefulLinks'
import YoutubeChannels from './YoutubeChannels/YoutubeChannels'
import Banner from './Banner/Banner'

function Home() {
  return (
    <section className={styles.home}>
        <Banner></Banner>
        <Hero></Hero>
        <UsefulLinks></UsefulLinks>
        {/* <YoutubeChannels></YoutubeChannels> */}
    </section>
  )
}

export default Home
