import styles from './DeleteModal.module.css'

import React from 'react'

function DeleteModal({currentExerciseID,onDeleteCancel, onDeleteConfirm, setTrigger}) {
  return (
    <div className={`${styles.delete_modal}`}>
        <div className={`${styles.modal_box}`}>
            <p>Are You sure you want to delete this Exercise?!</p>
            <div className={styles.buttons_box}>
                <button
                    onClick={() => onDeleteConfirm(currentExerciseID, setTrigger)} 
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
