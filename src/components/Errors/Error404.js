import styles from './Error.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <section className={styles.error}>
        <div className={styles.info_box}>
            <h1>Page not found!</h1>
            <h6>ERROR</h6>
            <h1 className={styles.err_h1}>404</h1>
            <Link to={'/'}>Go to Home</Link>
        </div>
    </section>
  )
}

export default Error404
