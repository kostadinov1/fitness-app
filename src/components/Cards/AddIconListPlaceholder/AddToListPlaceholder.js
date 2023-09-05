
import { Link } from 'react-router-dom'
import styles from './AddToListPlaceholder.module.css'
import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'

const AddIconListPlaceholder = ({type}) => {
  return (
    <Link
        to={`/create-${type}`}
        className={`${styles.placeholder}`}>
            Create {type} <PlusCircleFilled />
    </Link>
  )
}

export default AddIconListPlaceholder