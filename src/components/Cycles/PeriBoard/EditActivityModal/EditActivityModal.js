import styles from './EditActivityModal.module.css'
import React from 'react'


const EditActivityModal = () => {
    
    return (  
      <div className={`${styles.edit_activity_modal}`}>
          <div className={`${styles.modal_box}`}>
              <div className={`${styles.modal_sectino_1}`}>
                  {/* ACTIVITY FORM HERE each param can be edited
                  - type : running/weightlifting - showing different stats on different types 
                  - duration
                  - distance
                  - hr
                  - pace */}
              </div>
              <div className={`${styles.modal_sectino_2}`}>
                  {/* List of the Activitys exercises 
                  each of which can be edited
                  -sets
                  -reps
                  -kg */}
               </div>  
          </div>
  
  
          
      </div>
    )
  }
  
export default EditActivityModal
