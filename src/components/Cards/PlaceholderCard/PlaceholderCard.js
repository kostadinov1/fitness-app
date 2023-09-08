

import { Link } from 'react-router-dom'
import styles from './PlaceholderCard.module.css'
import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'

const PlaceholderCard = ({cycleType, parent}) => {

  return (
    <div className={`${styles.placeholdercard}`}>
        <Link
            to={`/create-${cycleType}-cycle`}
            className={`${styles.link}`}
            >
            create {cycleType} Cycle
            <PlusCircleFilled
                className={`${styles.icon}`}
            ></PlusCircleFilled>
        </Link>
        
    </div>
  )
}

export default PlaceholderCard