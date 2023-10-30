import React from 'react'
import styles from './GameCard.module.css'


const GameCard = ({price, title, imgUrl}) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_imagewrapper}>
        <img className={styles.product_card_image} src={imgUrl} alt={title}/>
      </div>
      <div className={styles.product_card_body}>
        <div className={styles.product_card_price}>{price}</div>
        <div className={styles.product_card_title}>{title}</div>
      </div>
      <button className={styles.product_card_button}>
        <div className={styles.product_card_button_inner}>
          Купить
        </div>
      </button>
    </div>
  )
}

export default GameCard