import styles from './Header.module.css'


import React from 'react'
import { Link } from 'react-router-dom'
import { MenuOutlined, PoweroffOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'

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
          <Link to={'/all-exercises'} className={styles.link}>Exercises</Link>
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
      <div className={styles.auth_icons}>
        <Link to={'/register'}>
          <UserAddOutlined className={styles.register_icon}/>
        </Link>
        <Link to={'/login'}>
          <UserOutlined className={styles.login_icon}/>
        </Link>
        <Link to={'/'}>
          <PoweroffOutlined className={styles.logout_icon}/>
        </Link>
      </div>
        <Link to={'/'}>
         <MenuOutlined className={styles.menu_icon}/>
        </Link>
    </section >
  )
}

export default Header
