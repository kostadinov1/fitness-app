import styles from './Error.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Error500() {
  return (
    <section className={styles.error}>
        <div className={styles.info_box}>
            <h1>Internal Server Error!</h1>
            <h6>ERROR</h6>
            <h1 className={styles.err_h1}>500</h1>
            <h3><Link to={'/home'}>Go to Home</Link></h3>
        </div>
    </section>
  )
}

export default Error500
