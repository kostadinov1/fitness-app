import styles from './DeleteProfileModal.module.css'
import React from 'react'

function DeleteProfileModal({profileID,onDeleteCancel, onDeleteConfirm}) {

return (
  <div className={`${styles.delete_modal}`}>
      <div className={`${styles.modal_box}`}>
          <p>Are You sure you want to delete YOUR PROFILE?!</p>
          <div className={styles.buttons_box}>
              <button
                  onClick={onDeleteConfirm} 
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

export default DeleteProfileModal
