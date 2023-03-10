import styles from './Header.module.css'


import React from 'react'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'

function Header() {
  return (
    <section className={styles.header}>
      <img alt='' className={styles.logo} />
      <h1>fithub</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>Home</Link>
          </li>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>Dashboard</Link>
          </li>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>Exercises</Link>
          </li>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>Activities</Link>
          </li>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>About Us</Link>
          </li>
        <li className={styles.li}>
          <Link to={'/'} className={styles.link}>Contacts</Link>
        </li>
      </ul>
      <MenuOutlined className={styles.menu_icon}/>
    </section >
  )
}

export default Header
