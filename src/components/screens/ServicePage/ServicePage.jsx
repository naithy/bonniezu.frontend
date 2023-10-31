import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './ServicePage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button';
import { useTelegram } from '../../../hooks/useTelegram'


const {tg} = useTelegram()

const COLORS = {
  discord: '#586AE9',
  faceit: '#FFFFFF',
  spotify: '#19E58D',
  steam: '#C0DFDC',
}

const ServicePage = () => {

  const types = ['Со входом', 'Без входа'];
  const time = ['1 месяц', '5 месяцев', '1 год']

  const navigate = useNavigate();

  useLayoutEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate(-1))
  }, [])

  const location = (useLocation().pathname).slice(1);

  useEffect(() => {
    tg.setHeaderColor(`${COLORS[location]}`);
  }, [])

  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);

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
        <div className={styles.order_selector}>
          <ul>
            <Button onClick={() => setActive(0)} active={active === 0 ? true : false} inner='Со входом'/>
            <Button onClick={() => setActive(1)} active={active === 1 ? true : false} inner='Без входа'/>
          </ul>
          <ul>
            <Button onClick={() => setActive2(0)} active={active2 === 0 ? true : false} inner='1 месяц'/>
            <Button onClick={() => setActive2(1)} active={active2 === 1 ? true : false} inner='2 месяца'/>
            <Button onClick={() => setActive2(2)} active={active2 === 2 ? true : false} inner='1 год'/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServicePage


