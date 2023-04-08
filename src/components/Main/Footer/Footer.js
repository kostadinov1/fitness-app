import { DeploymentUnitOutlined, FireFilled, SettingOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import FooterBanner from './FooterBanner/FooterBanner'


function Footer() {
  return (
    <section className={styles.footer}>
                <ul>
                    <li><Link to={`/dashboard`}><SettingOutlined /> Dashboard</Link></li>
                    <li><Link to={`/profile`}><UserOutlined /> Profile</Link></li>
                    <li><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
                    <li><Link to={'/create-exercise'}><SubnodeOutlined /> Create Exercise</Link></li>
                    <li><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
                    <li><Link to={'/create-activity'}><SubnodeOutlined /> Create Activity</Link></li>
                    <li><Link to={'/all-cycles'}><SyncOutlined /> Cycles</Link></li>
                    <li><Link to={'/create-cycle'}><SubnodeOutlined /> Create Cycle</Link></li>                 
                </ul>
      <ul className={styles.ul} type='list'>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
      </ul>
      <ul className={styles.ul} type='list'>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
        <li className={styles.li}><a className={styles.a} href='#'>Useful Link</a></li>
      </ul>
      <FooterBanner></FooterBanner>
    </section>
  )
}

export default Footer
