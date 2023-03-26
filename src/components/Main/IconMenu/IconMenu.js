import styles from './IconMenu.module.css'
import React from 'react'
import ListCard from '../../Cards/ListCard/ListCard'

function IconMenu() {
  return (
    <div className={`${styles.icon_menu}`}>
      <ListCard></ListCard>
    </div>
  )
}

export default IconMenu
