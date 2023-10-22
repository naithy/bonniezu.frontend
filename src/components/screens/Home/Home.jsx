import React from 'react'
import styles from './Home.module.css'
import Layout from '../../ui/Layout/Layout'
import { useTelegram } from '../../../hooks/useTelegram'


const {tg} = useTelegram()
tg.setHeaderColor('secondary_bg_color')


const Home = () => {
  return (
    <div className={styles.home_page}>
      <Layout/>
    </div>
  )
}

export default Home