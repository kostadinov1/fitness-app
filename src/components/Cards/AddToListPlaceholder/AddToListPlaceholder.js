
import { Link } from 'react-router-dom'
import styles from './AddToListPlaceholder.module.css'
import React, { useState } from 'react'
import { PlusCircleFilled } from '@ant-design/icons'
import CreateActivityModal from './../../Activities/CreateActivityModal/CreateActivityModal'
import CreateExercise from './../../Exercises/CreateExercise/CreateExercise'
const AddIconListPlaceholder = ({item, type}) => {

    console.log('STSRT', item , 'item in ADDiconLISTplaceholder')
    
    const [ showActivityCreateModal,setShowCreateActivityModal] = useState(false)
    const [ showExerciceCreateModal,setShowCreateExerciseModal] = useState(false)

    const onClickHandler = () => {
        if (type === 'activity'){
            setShowCreateActivityModal(true) 
        } else if (type === 'exercise') {
            setShowCreateExerciseModal(true)
        }
    
    }

    return (
        <div>
            <Link
                onClick={onClickHandler}
                className={`${styles.placeholder}`}>
                    Create {type} <PlusCircleFilled />
            </Link>
            
            {showActivityCreateModal ? 
                <CreateActivityModal 
                    setShowCreateActivityModal={setShowCreateActivityModal} />

            : null}

            {showExerciceCreateModal ?
                <CreateExercise 
                    setShowCreateExerciseModal={setShowCreateExerciseModal}/>
            : null}
        </div>
  )
}

export default AddIconListPlaceholder