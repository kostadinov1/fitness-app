import { DeploymentUnitOutlined, FireFilled, SettingOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'


function Footer() {
  return (
    <section className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/dashboard`}><SettingOutlined /> Dashboard</Link></li>
            <li className={styles.li}><Link to={`/profile`}><UserOutlined /> Profile</Link></li>
            <li className={styles.li}><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
            <li className={styles.li}><Link to={'/create-exercise'}><SubnodeOutlined /> Create Exercise</Link></li>
            <li className={styles.li}><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
            <li className={styles.li}><Link to={'/create-activity'}><SubnodeOutlined /> Create Activity</Link></li>
            <li className={styles.li}><Link to={'/all-cycles'}><SyncOutlined /> Cycles</Link></li>
            <li className={styles.li}><Link to={'/create-cycle'}><SubnodeOutlined /> Create Cycle</Link></li>                 
        </ul>
        <ul className={styles.ul} type='list'>
 </ul>
        <ul className={styles.ul} type='list'>

        </ul>
    </section>
  )
}

export default Footer
