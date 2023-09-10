
import { Link } from 'react-router-dom'
import styles from './AddToListPlaceholder.module.css'
import React, { useState } from 'react'
import { PlusCircleFilled } from '@ant-design/icons'
import CreateActivityModal from './../../Activities/CreateActivityModal/CreateActivityModal'

const AddIconListPlaceholder = ({item, type}) => {

    console.log('STSRT', item , 'item in ADDiconLISTplaceholder')
    
    const [ showActivityCreateModal,setShowCreateActivityModal] = useState(false)
    const onClickHandler = () => { setShowCreateActivityModal(true) }

    return (
        <div>
            <Link
                onClick={onClickHandler}
                className={`${styles.placeholder}`}>
                    Create {type} <PlusCircleFilled />
            </Link>
            {showActivityCreateModal ? 
                <CreateActivityModal 
                    setShowCreateActivityModal={setShowCreateActivityModal} >
                    </CreateActivityModal>
            : null}
        </div>
  )
}

export default AddIconListPlaceholder