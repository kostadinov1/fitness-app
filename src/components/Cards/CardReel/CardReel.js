import React from 'react'
import ItemCardSmall from '../ItemCardSmall/ItemCardSmall'
import styles from './CardReel.module.css'


function CardReel() {
  return (
    <div className={styles.card_reel}>
      <ItemCardSmall />
      <ItemCardSmall />
      <ItemCardSmall />
    </div>
  )
}

export default CardReel
