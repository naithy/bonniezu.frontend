import React, { useEffect } from 'react'
import styles from './Home.module.css'
import Layout from '../../ui/Layout/Layout'
import { useTelegram } from '../../../hooks/useTelegram'


const {tg} = useTelegram()


const Home = () => {

  useEffect(() => {
    tg.ready();
    tg.setHeaderColor('secondary_bg_color');
  }, [])

  return (
    <div className={styles.home_page}>
      <Layout/>
    </div>
  )
}

export default Home