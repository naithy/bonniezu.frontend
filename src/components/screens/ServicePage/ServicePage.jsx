import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './ServicePage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button';
import { useTelegram } from '../../../hooks/useTelegram'


const {tg} = useTelegram()

const COLORS = {
  discord: '#586AE9',
  faceit: '',
  spotify: '',
  steam: '',
}

const ServicePage = () => {

  const navigate = useNavigate();

  useLayoutEffect(() => {
    tg.BackButton.isVisible(true);
    tg.BackButton.onClick(navigate(-1))
  }, [])

  const location = (useLocation().pathname).slice(1);

  useEffect(() => {
    tg.setHeaderColor(`${COLORS[location]}`);
  }, [])

  const [active, setActive] = useState(0);

  return (
    <div className={styles.service_page}>
      <div className={styles.service_image} style={{ backgroundColor: `${COLORS[location]}` }}>
        <img src={`/${location}.jpg`} alt={location} width='100%'/>
      </div>
      <div className={styles.order_card}>
        <div className={styles.order_price}>
          500 ₽
        </div>
        <hr/>
        <div className={styles.order_options}>
          <Button time='1year' method='Cо входом' onClick={() => setActive(0)} active={active === 0 ? true : false}/>
          <Button time='1year' method='Без входа' onClick={() => setActive(1)} active={active === 1 ? true : false}/>
        </div>
      </div>
    </div>
  )
}

export default ServicePage


