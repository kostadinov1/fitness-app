import { ExperimentOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ItemCardSmall.module.css'


function ItemCardSmall(item) {
  return (
    <div className={styles.card}>
        <div className={styles.card_info}>
            <h3>{item.name}</h3>
            <ul>
                <li>Info: {item.description}</li>
                <li>Type: {item.type}</li>
            </ul>
        </div>
        <div className={styles.card_actions}>
            <div className={styles.card_action}>
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Edit
                </Link>
            </div>
            <div className={styles.card_action}>
                <Link to={'/'}>
                    <ExperimentOutlined />
                    Delete
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemCardSmall
