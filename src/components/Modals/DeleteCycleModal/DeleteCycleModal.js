
import styles from './DeleteCycleModal.module.css'
import React from 'react'

const DeleteCycleModal = ({cycle, onDeleteConfirm,  setShowDeleteModal}) => {

    const onNoClick = () => {
        setShowDeleteModal(false)
    }

  return (
    <div className={`${styles.delete_modal}`}>
        <div className={`${styles.modal_box}`}>        
            <div className={`${styles.cell} ${styles.cell_1}`}>
                ARE YOU SURE YOU WANT TO DELETE THIS CYCLE!?
            </div>
            <button 
                onClick={() => onDeleteConfirm(cycle)}
                className={`${styles.cell} ${styles.cell_2}`}>YES</button>
            <button 
                onClick={onNoClick}
                className={`${styles.cell} ${styles.cell_3}`}>NO</button>
        </div>
    </div>
  )
}

export default DeleteCycleModal