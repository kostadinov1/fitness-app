import React from 'react'
import styles from './CycleTooltip.module.css'

function CycleTooltip({data}) {
    console.log(data,'data tooltip');
  return (
    <div className={`${styles.tooltip}`}>
      <h1>THIS IS THE TOOLTIP</h1>
    </div>
  )
}

export default CycleTooltip
