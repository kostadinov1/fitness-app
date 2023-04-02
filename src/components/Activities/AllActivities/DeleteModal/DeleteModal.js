import styles from './DeleteModal.module.css'

import React from 'react'

function DeleteModal({currentActivityID,onDeleteCancel, onDeleteConfirm, setTrigger}) {
    console.log('Delte Modal', currentActivityID)
  return (
    <div className={`${styles.delete_modal}`}>
        <div className={`${styles.modal_box}`}>
            <p>Are You sure you want to delete this Activity?!</p>
            <div className={styles.buttons_box}>
                <button
                    onClick={() => onDeleteConfirm(currentActivityID, setTrigger)} 
                    >Yes!
                </button>
                <button
                    onClick={onDeleteCancel}
                    >No!
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal
