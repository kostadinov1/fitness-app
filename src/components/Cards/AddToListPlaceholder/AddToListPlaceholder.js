
import { Link } from 'react-router-dom'
import styles from './AddToListPlaceholder.module.css'
import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'


const AddIconListPlaceholder = ({itemType, dispatch, relatedActivity}) => {


    

    return (
        <div>
            <Link 
                onClick={() => { dispatch({type: itemType, payload: relatedActivity})} }
                className={`${styles.placeholder}`}
                >
                CREATE {itemType} <PlusCircleFilled />
            </Link>
        </div>
  )
}

export default AddIconListPlaceholder