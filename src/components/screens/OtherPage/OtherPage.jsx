import React from 'react'
import styles from './OtherPage.module.css'
import { Link } from 'react-router-dom'


const OtherPage = () => {
  return (
    <div className={styles.other__page}>
        <ul className={styles.other__list}>
            <li className={styles.other__title}><Link to='/chatgpt' className={styles.other__title_a}>ChatGPT</Link></li>
            <li className={styles.other__title}><Link className={styles.other__title_a}>Xbox Game Pass</Link></li>
            <li className={styles.other__title}><Link to='/brawl' className={styles.other__title_a}>Гемы Brawl Stars</Link></li>
        </ul>
    </div>
  )
}

export default OtherPage