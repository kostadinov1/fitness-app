import styles from './ListCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { DeploymentUnitOutlined, FireFilled, SettingOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'

function ListCard(item) {
  return (
<div className={styles.list_card}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to={`/dashboard`}><SettingOutlined /> Dashboard</Link></li>
                    <li><Link to={`/profile`}><UserOutlined /> Profile</Link></li>
                    <hr></hr>
                    <li><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
                    <li><Link to={'/create-exercise'}><SubnodeOutlined /> Create Exercise</Link></li>
                    <hr></hr>
                    <li><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
                    <li><Link to={'/create-activity'}><SubnodeOutlined /> Create Activity</Link></li>
                    <hr></hr>
                    <li><Link to={'/all-cycles'}><SyncOutlined /> Cycles</Link></li>
                    <li><Link to={'/create-cycle'}><SubnodeOutlined /> Create Cycle</Link></li>
                    <hr></hr>
                </ul>
            </div>
  )
}

export default ListCard
