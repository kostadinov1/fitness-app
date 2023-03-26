import styles from './IconMenu.module.css'
import '../../../App.css'
import React, { useContext } from 'react'
import ListCard from '../../Cards/ListCard/ListCard'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'

function IconMenu() {
    const {user, setUser} = useContext(UserContext)

  return (
    <div className={`${styles.icon_menu}`}>
      <ul className={`${styles.ul}`}>
        <li>
            <Link className={`${styles.link}`} to={`${'/dashboard'}`}>
                Dashboard
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`/profile/${user.id}/`}>
                Profile
            </Link>
        </li>
        <li>
        <Link className={`${styles.link}`} to={`/create-exercise/`}>
                Create Exercise
             </Link>
         </li>
         <li>
         <Link className={`${styles.link}`} to={`/create-activity/`}>
                Create Activity
             </Link>
         </li>
        <li>
            <Link className={`${styles.link}`} to={`${'/dashboard'}`}>
                Cycles
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`${'/all-activities'}`}>
                Activities
            </Link>
        </li>
        <li>
            <Link className={`${styles.link}`} to={`${'/all-exercises'}`}>
                Exercises
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default IconMenu
