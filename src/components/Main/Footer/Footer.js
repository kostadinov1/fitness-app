import React from 'react'
import styles from './Footer.module.css'


function Footer() {
  return (
    <section className={styles.footer}>
      <ul className={styles.ul} type='list'>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
      </ul>
    </section>
  )
}

export default Footer
