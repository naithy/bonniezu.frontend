import React from 'react'
import styles from './GamesHeader.module.css'


const GamesHeader = () => {
  return (
    <div className={styles.products_header}>
        <h2>Игры</h2>
        <div className={styles.products_header_filters}></div>
    </div>
  )
}

export default GamesHeader