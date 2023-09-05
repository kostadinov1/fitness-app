

import { Link } from 'react-router-dom'
import styles from './PlaceholderCard.module.css'
import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'

const PlaceholderCard = ({cycle_type}) => {

  return (
    <div className={`${styles.placeholdercard}`}>
        <Link
            to={`/create-${cycle_type}-cycle`}
            className={`${styles.link}`}
            >
            add {cycle_type} Cycle
            <PlusCircleFilled
                className={`${styles.icon}`}
            ></PlusCircleFilled>
        </Link>
        
    </div>
  )
}

export default PlaceholderCard