

import styles from './DeleteMacroCycleModal.module.css'
import React from 'react'

const DeleteMacroCycleModal = ({cycle, dispatch, onDeleteMacroConfirm,  onNoClick}) => {
        
  return (
    <div className={`${styles.delete_modal}`}>
        <div className={`${styles.modal_box}`}>        
            <div className={`${styles.cell} ${styles.cell_1}`}>
                ARE YOU SURE YOU WANT TO DELETE THIS CYCLE!?
            </div>
            <button 
                onClick={() => onDeleteMacroConfirm(cycle)}
                className={`${styles.cell} ${styles.cell_2}`}>
                YES
            </button>
            <button 
                onClick={() => dispatch({type: 'hideMacroDelete'})}
                className={`${styles.cell} ${styles.cell_3}`}>
                NO
            </button>
        </div>
    </div>
  )
}

export default DeleteMacroCycleModal