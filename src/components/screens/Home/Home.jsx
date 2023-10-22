import React, { useEffect } from 'react'
import styles from './Home.module.css'
import Layout from '../../ui/Layout/Layout'
import { useTelegram } from '../../../hooks/useTelegram'


const {tg} = useTelegram()
tg.setHeaderColor('secondary_bg_color')


const Home = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className={styles.home_page}>
      <Layout/>
    </div>
  )
}

export default Home