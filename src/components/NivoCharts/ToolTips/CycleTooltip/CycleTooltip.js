import React from 'react'
import styles from './CycleTooltip.module.css'

function CycleTooltip({data}) {
    console.log(data,'data tooltip');
  return (
    <div className={`${styles.tooltip}`}>
      this is the tooltip
    </div>
  )
}

export default CycleTooltip
