import styles from './IconMenu.module.css'
import '../../../App.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import { DeploymentUnitOutlined, FireFilled,  SettingOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'

function IconMenu() {
    const {user} = useContext(UserContext)

  return (
    <div className={`${styles.icon_menu}`}>
      <ul className={`${styles.ul}`}>
        <li>
            <Link className={`${styles.link}`} to={`${'/dashboard'}`}>
                <SettingOutlined /> Dashboard
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`/profile`}>
                <UserOutlined /> Profile
            </Link>
        </li>
        <hr/>
        <li>
        <Link className={`${styles.link}`} to={`/create-exercise/`}>
        <SubnodeOutlined /> Create Exercise
             </Link>
         </li>
         <li>
         <Link className={`${styles.link}`} to={`/create-activity/`}>
            <SubnodeOutlined /> Create Activity
             </Link>
         </li>
         <hr/>
        <li>
            <Link className={`${styles.link}`} to={`${'/dashboard'}`}>
                <SyncOutlined /> Cycles
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`${'/all-activities'}`}>
               <DeploymentUnitOutlined /> Activities
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`${'/all-exercises'}`}>
                <FireFilled /> Exercises
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default IconMenu
