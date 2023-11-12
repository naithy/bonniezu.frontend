import React, { useEffect } from 'react'
import styles from './OtherPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useTelegram } from '../../../hooks/useTelegram'


const OtherPage = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(
        '/'
    );

    const { tg } = useTelegram()

    tg.BackButton.show();

    useEffect(() => {
        tg.setHeaderColor('bg_color')
        tg.onEvent('backButtonClicked', goBack)

        return () => {
            tg.offEvent('backButtonClicked', goBack)
          }
    })

  return (
    <div className={styles.other__page}>
        <ul className={styles.other__list}>
            <li className={styles.other__title}><Link to='/chatgpt' className={styles.other__title_a}>ChatGPT</Link></li>
            <li className={styles.other__title}><Link to='/xbox' className={styles.other__title_a}>Xbox Game Pass</Link></li>
            <li className={styles.other__title}><Link to='/brawl' className={styles.other__title_a}>Гемы Brawl Stars</Link></li>
            <li className={styles.other__title}><Link to='/fc' className={styles.other__title_a}>Поинты EA SPORTS FC 24</Link></li>
        </ul>
    </div>
  )
}

export default OtherPage