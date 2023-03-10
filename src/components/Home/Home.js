import styles from './Home.module.css'

import React from 'react'
import Hero from './Hero/Hero'

function Home() {
  return (
    <section className={styles.home}>
        <Hero></Hero>
    </section>
  )
}

export default Home
